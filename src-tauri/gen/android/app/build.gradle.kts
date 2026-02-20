import java.util.Properties
import org.gradle.api.GradleException

plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("rust")
}

val tauriProperties = Properties().apply {
    val propFile = file("tauri.properties")
    if (propFile.exists()) {
        propFile.inputStream().use { load(it) }
    }
}

val androidKeystoreFile = System.getenv("ANDROID_KEYSTORE_FILE")
val androidKeystorePassword = System.getenv("ANDROID_KEYSTORE_PASSWORD")
val androidKeyAlias = System.getenv("ANDROID_KEY_ALIAS")
val androidKeyPassword = System.getenv("ANDROID_KEY_PASSWORD")
val hasAndroidSigning = !androidKeystoreFile.isNullOrBlank()
    && !androidKeystorePassword.isNullOrBlank()
    && !androidKeyAlias.isNullOrBlank()
    && !androidKeyPassword.isNullOrBlank()

android {
    compileSdk = 36
    namespace = "com.prexcommunis.app"
    defaultConfig {
        manifestPlaceholders["usesCleartextTraffic"] = "false"
        applicationId = "com.prexcommunis.app"
        minSdk = 24
        targetSdk = 36
        versionCode = tauriProperties.getProperty("tauri.android.versionCode", "1").toInt()
        versionName = tauriProperties.getProperty("tauri.android.versionName", "1.0")
    }
    signingConfigs {
        if (hasAndroidSigning) {
            create("release") {
                storeFile = file(androidKeystoreFile)
                storePassword = androidKeystorePassword
                keyAlias = androidKeyAlias
                keyPassword = androidKeyPassword
            }
        }
    }
    buildTypes {
        getByName("debug") {
            manifestPlaceholders["usesCleartextTraffic"] = "true"
            isDebuggable = true
            isJniDebuggable = true
            isMinifyEnabled = false
            packaging {                jniLibs.keepDebugSymbols.add("*/arm64-v8a/*.so")
                jniLibs.keepDebugSymbols.add("*/armeabi-v7a/*.so")
                jniLibs.keepDebugSymbols.add("*/x86/*.so")
                jniLibs.keepDebugSymbols.add("*/x86_64/*.so")
            }
        }
        getByName("release") {
            isMinifyEnabled = true
            if (hasAndroidSigning) {
                signingConfig = signingConfigs.getByName("release")
            }
            proguardFiles(
                *fileTree(".") { include("**/*.pro") }
                    .plus(getDefaultProguardFile("proguard-android-optimize.txt"))
                    .toList().toTypedArray()
            )
        }
    }
    buildFeatures {
        buildConfig = true
    }
    lint {
        // Work around AGP/Kotlin lint analyzer crashes on this project.
        checkReleaseBuilds = false
        abortOnError = false
    }
}

kotlin {
    jvmToolchain(11)
}

rust {
    rootDirRel = "../../../"
}

dependencies {
    implementation("androidx.webkit:webkit:1.14.0")
    implementation("androidx.appcompat:appcompat:1.7.1")
    implementation("androidx.activity:activity-ktx:1.10.1")
    implementation("com.google.android.material:material:1.12.0")
    testImplementation("junit:junit:4.13.2")
    androidTestImplementation("androidx.test.ext:junit:1.1.4")
    androidTestImplementation("androidx.test.espresso:espresso-core:3.5.0")
}

val webDistDir = projectDir.resolve("../../../../dist")
val androidAssetsDir = projectDir.resolve("src/main/assets")
val tauriConfigSource = projectDir.resolve("../../../tauri.conf.json")

val ensureWebDist by tasks.registering(Exec::class) {
    group = "build"
    description = "Builds the web app into dist/ when Android build runs from Android Studio."
    workingDir = projectDir.resolve("../../../..")
    commandLine("bun", "run", "build")
    // Skip if dist already exists so repeat installs stay fast.
    onlyIf { !webDistDir.exists() }
}

val syncWebAssets by tasks.registering {
    group = "build"
    description = "Copies built web assets from dist/ into Android assets."
    dependsOn(ensureWebDist)
    doLast {
        if (!webDistDir.exists()) {
            throw GradleException("Missing web dist at ${webDistDir.absolutePath}. Run `bun run build` first.")
        }
        copy {
            from(webDistDir)
            into(androidAssetsDir)
        }

        if (!tauriConfigSource.exists()) {
            throw GradleException("Missing Tauri config at ${tauriConfigSource.absolutePath}.")
        }
        val tauriConfigText = tauriConfigSource
            .readText()
            .replace(Regex("\"devUrl\"\\s*:\\s*\"[^\"]*\""), "\"devUrl\": null")
        androidAssetsDir.resolve("tauri.conf.json").writeText(tauriConfigText)
    }
}

tasks.matching { it.name.startsWith("merge") && it.name.endsWith("Assets") }.configureEach {
    dependsOn(syncWebAssets)
    val variantName = name.removePrefix("merge").removeSuffix("Assets")
    val rustTaskName = "rustBuild$variantName"
    if (tasks.names.contains(rustTaskName)) {
        dependsOn(rustTaskName)
    }
}

apply(from = "tauri.build.gradle.kts")
