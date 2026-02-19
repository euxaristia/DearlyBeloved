import java.io.File
import javax.inject.Inject
import org.apache.tools.ant.taskdefs.condition.Os
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.TaskAction
import org.gradle.process.ExecOperations

abstract class BuildTask : DefaultTask() {
    @get:Inject
    protected abstract val execOperations: ExecOperations

    @Input
    var rootDirRel: String? = null
    @Input
    var target: String? = null
    @Input
    var release: Boolean? = null

    @TaskAction
    fun assemble() {
        val rootDirRel = rootDirRel ?: throw GradleException("rootDirRel cannot be null")
        val workingDir = File(project.projectDir, rootDirRel)
        
        var projectRoot = workingDir
        if (!File(projectRoot, "package.json").exists()) {
            val parent = projectRoot.parentFile
            if (parent != null && File(parent, "package.json").exists()) {
                projectRoot = parent
            }
        }

        // 1. Build frontend assets
        project.logger.lifecycle("Building frontend assets in ${projectRoot.absolutePath}...")
        try {
            execOperations.exec {
                workingDir(projectRoot)
                if (Os.isFamily(Os.FAMILY_WINDOWS)) {
                    executable("cmd")
                    args("/c", "bun", "run", "build")
                } else {
                    executable("bun")
                    args("run", "build")
                }
            }.assertNormalExitValue()
        } catch (e: Exception) {
            project.logger.warn("Frontend build failed: ${e.message}")
        }

        // 2. Copy assets to Android project
        val distDir = File(projectRoot, "dist")
        val assetsDir = File(project.projectDir, "src/main/assets")
        if (distDir.exists()) {
            project.logger.lifecycle("Copying assets from ${distDir.absolutePath} to ${assetsDir.absolutePath}")
            assetsDir.deleteRecursively()
            assetsDir.mkdirs()
            distDir.copyRecursively(assetsDir, overwrite = true)
            
            // Also ensure a tauri.conf.json exists in assets with NO devUrl.
            val assetConfig = File(assetsDir, "tauri.conf.json")
            assetConfig.writeText("{\"build\": {\"devUrl\": \"\"}}")
        }

        // 3. Force standalone mode in tauri.properties
        val tauriProps = File(project.projectDir, "tauri.properties")
        tauriProps.writeText("tauri.android.devAddr=\n")

        // 4. Build Rust library
        val ndkDir = findNdkDir()

        if (ndkDir == null || !ndkDir.exists()) {
            project.logger.warn("NDK not found, falling back to Tauri CLI")
            runTauriCliFallback(workingDir)
            return
        }

        val tTarget = target ?: "aarch64"
        val (cargoTarget, toolchainPrefix, abiFolder) = when (tTarget) {
            "aarch64" -> Triple("aarch64-linux-android", "aarch64-linux-android", "arm64-v8a")
            "arm" -> Triple("armv7-linux-androideabi", "armv7-linux-androideabi", "armeabi-v7a")
            "armv7" -> Triple("armv7-linux-androideabi", "armv7-linux-androideabi", "armeabi-v7a")
            "x86" -> Triple("i686-linux-android", "i686-linux-android", "x86")
            "i686" -> Triple("i686-linux-android", "i686-linux-android", "x86")
            "x86_64" -> Triple("x86_64-linux-android", "x86_64-linux-android", "x86_64")
            else -> Triple(tTarget, tTarget, tTarget)
        }

        val osName = if (Os.isFamily(Os.FAMILY_WINDOWS)) "windows-x86_64" else "linux-x86_64"
        val toolchainPath = File(ndkDir, "toolchains/llvm/prebuilt/$osName/bin")
        val exeSuffix = if (Os.isFamily(Os.FAMILY_WINDOWS)) ".cmd" else ""
        
        // Linker for 32-bit ARM is a bit special in the NDK
        val linkerPrefix = if (tTarget == "arm" || tTarget == "armv7") "armv7a-linux-androideabi24" else "${toolchainPrefix}24"
        var linker = File(toolchainPath, "${linkerPrefix}-clang$exeSuffix")

        if (!linker.exists()) {
            project.logger.warn("Linker not found at ${linker.absolutePath}, trying without API level")
            val fallbackLinker = File(toolchainPath, "${toolchainPrefix}-clang$exeSuffix")
            if (fallbackLinker.exists()) {
                linker = fallbackLinker
            } else {
                 project.logger.warn("Fallback linker also not found, falling back to Tauri CLI")
                 runTauriCliFallback(workingDir)
                 return
            }
        }

        val ar = File(toolchainPath, "llvm-ar$exeSuffix")
        val nm = File(toolchainPath, "llvm-nm$exeSuffix")

        project.logger.lifecycle("Building Rust library for target $cargoTarget using NDK at ${ndkDir.absolutePath}...")

        execOperations.exec {
            workingDir(workingDir)
            executable("cargo")
            args("build")
            if (release == true) args("--release")
            args("--target", cargoTarget)
            
            val envTriple = cargoTarget.uppercase().replace("-", "_")
            environment("CARGO_TARGET_${envTriple}_LINKER", linker.absolutePath)
            environment("CC_${cargoTarget}", linker.absolutePath)
            environment("CXX_${cargoTarget}", File(toolchainPath, "${linkerPrefix}-clang++$exeSuffix").absolutePath)
            environment("AR_${cargoTarget}", ar.absolutePath)
            environment("NM_${cargoTarget}", nm.absolutePath)
            
            environment("TAURI_PLATFORM", "android")
            environment("TAURI_ARCH", tTarget)
            environment("TAURI_FAMILY", "unix")
            
            environment("TAURI_CONFIG", "{\"build\":{\"devUrl\":null},\"app\":{\"windows\":[]}}")
            environment("TAURI_ENV_RELEASE", if (release == true) "true" else "false")
            environment("TAURI_ANDROID_DEV_ADDR", "")
        }.assertNormalExitValue()

        val profile = if (release == true) "release" else "debug"
        val builtLib = File(workingDir, "target/$cargoTarget/$profile/libapp_lib.so")
        val destDir = File(project.projectDir, "src/main/jniLibs/$abiFolder")
        destDir.mkdirs()
        builtLib.copyTo(File(destDir, "libapp_lib.so"), overwrite = true)
    }

    private fun findNdkDir(): File? {
        try {
            val android = project.extensions.findByName("android")
            if (android != null) {
                val ndkDirProp = android.javaClass.methods.find { it.name == "getNdkDirectory" }
                val ndkDir = ndkDirProp?.invoke(android) as? File
                if (ndkDir != null && ndkDir.exists()) return ndkDir
                
                val ndkPathProp = android.javaClass.methods.find { it.name == "getNdkPath" }
                val ndkPath = ndkPathProp?.invoke(android) as? String
                if (ndkPath != null) {
                    val f = File(ndkPath)
                    if (f.exists()) return f
                }
            }
        } catch (unused: Exception) {}

        System.getenv("ANDROID_NDK_HOME")?.let { path ->
            val f = File(path)
            if (f.exists()) return f
        }
        System.getenv("ANDROID_NDK_ROOT")?.let { path ->
            val f = File(path)
            if (f.exists()) return f
        }

        val sdkDir = findSdkDir()
        if (sdkDir != null) {
            val ndkFolder = File(sdkDir, "ndk")
            if (ndkFolder.exists()) {
                val versions = ndkFolder.listFiles()?.filter { it.isDirectory }?.sortedByDescending { it.name }
                if (!versions.isNullOrEmpty()) return versions[0]
            }
        }

        return null
    }

    private fun findSdkDir(): File? {
        System.getenv("ANDROID_HOME")?.let { path ->
            val f = File(path)
            if (f.exists()) return f
        }
        System.getenv("ANDROID_SDK_ROOT")?.let { path ->
            val f = File(path)
            if (f.exists()) return f
        }
        val localProps = File(project.rootDir, "local.properties")
        if (localProps.exists()) {
            val props = java.util.Properties()
            localProps.inputStream().use { props.load(it) }
            props.getProperty("sdk.dir")?.let { path ->
                val f = File(path)
                if (f.exists()) return f
            }
        }
        return null
    }

    private fun runTauriCliFallback(workingDir: File) {
        val attempts = listOf(listOf("npx", "tauri"), listOf("bunx", "tauri"))
        for (attempt in attempts) {
            try {
                project.logger.lifecycle("Attempting fallback with ${attempt.joinToString(" ")}")
                execOperations.exec {
                    workingDir(workingDir)
                    executable(attempt[0])
                    args(attempt.drop(1) + listOf("android", "android-studio-script", "--target", target ?: "aarch64"))
                    if (release == true) args("--release")
                    environment("TAURI_ANDROID_DEV_ADDR", "")
                    environment("TAURI_CONFIG", "{\"build\":{\"devUrl\":null}}")
                    environment("TAURI_ENV_RELEASE", if (release == true) "true" else "false")
                }.assertNormalExitValue()
                return
            } catch (e: Exception) {
                project.logger.warn("Fallback ${attempt[0]} failed: ${e.message}")
            }
        }
        throw GradleException("Failed to build Rust library. NDK not found and Tauri CLI fallback failed.")
    }
}
