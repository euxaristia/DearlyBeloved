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
        }

        // 3. Force standalone mode in tauri.properties
        val tauriProps = File(project.projectDir, "tauri.properties")
        tauriProps.writeText("tauri.android.devAddr=\n")

        // 4. Build Rust library
        val ndkDir = findNdkDir() ?: throw GradleException("NDK not found")

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
        
        val linkerPrefix = if (tTarget == "arm" || tTarget == "armv7") "armv7a-linux-androideabi24" else "${toolchainPrefix}24"
        val linker = File(toolchainPath, "${linkerPrefix}-clang$exeSuffix")

        project.logger.lifecycle("Building Rust library for target $cargoTarget...")

        execOperations.exec {
            workingDir(workingDir)
            executable("cargo")
            args("build", "--verbose")
            // Build Rust in release mode for Android debug variants too, so Tauri mobile
            // does not compile with `cfg(dev)` and attempt localhost proxy loading.
            args("--release")
            args("--target", cargoTarget)

            environment("CARGO_TARGET_${cargoTarget.uppercase().replace("-", "_")}_LINKER", linker.absolutePath)
            environment("TAURI_PLATFORM", "android")
            environment("TAURI_ARCH", tTarget)
            environment("TAURI_FAMILY", "unix")
            environment("TAURI_ENV_DEBUG", "false")
            environment("TAURI_ENV_RELEASE", "true")
        }.assertNormalExitValue()

        val profile = "release"
        val builtLib = File(workingDir, "target/$cargoTarget/$profile/libapp_lib.so")
        if (!builtLib.exists()) {
            throw GradleException("Rust output not found at ${builtLib.absolutePath}")
        }
        val destDir = File(project.projectDir, "src/main/jniLibs/$abiFolder")
        destDir.mkdirs()
        builtLib.copyTo(File(destDir, "libapp_lib.so"), overwrite = true)
    }

    private fun findNdkDir(): File? {
        try {
            val android = project.extensions.findByName("android")
            if (android != null) {
                val getNdkDirectory = android.javaClass.getMethod("getNdkDirectory")
                val ndkDir = getNdkDirectory.invoke(android) as? File
                if (ndkDir != null && ndkDir.exists()) return ndkDir
            }
        } catch (unused: Exception) {}

        System.getenv("ANDROID_NDK_HOME")?.let { path ->
            val f = File(path)
            if (f.exists()) return f
        }
        return null
    }
}
