tasks.register("copyServerRuntime") {
	group = project.name
	description = "Copy artifacts to build directory."
	doFirst {
		copy {
			// Sources
			configurations.compileOnly.get().resolvedConfiguration.resolvedArtifacts.forEach { artifact ->
				logger.quiet("Copy ${artifact.id}...")
				from(artifact.file)
			}
			// Destination
			val destinationDir = projectDir.resolve("build")
			logger.quiet("...into ${destinationDir.absolutePath}")
			into(destinationDir)
		}
	}
}

tasks.register("deployTomcatRuntime") {
	group = project.name
	description = "Copy artifacts to tomcat extra libraries directory."
	dependsOn("copyServerRuntime")
	doLast {
		copy {
			// Find server
			val catalinaHome = System.getenv("CATALINA_HOME") ?: throw GradleException("Environment variable CATALINA_HOME expected!")
			logger.quiet("CATALINA_HOME: $catalinaHome")
			// Source
			val sourceDir = projectDir.resolve("build")
			logger.quiet("From $sourceDir...")
			from(sourceDir)
			// Destination
			val destinationDir = File(catalinaHome).resolve("lib").resolve("ext")
			logger.quiet("...into ${destinationDir.absolutePath}")
			into(destinationDir)
		}
	}
}