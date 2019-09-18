tasks.register("copyServerRuntime") {
	group = project.name
	description = "Copy artifacts to build directory."
	dependsOn("clean")
	doLast {
		copy {
			// Sources
			configurations.compileOnly.get().resolvedConfiguration.resolvedArtifacts.forEach { artifact ->
				logger.quiet("Copy ${artifact.id}...")
				from(artifact.file)
			}
			// Destination
			logger.quiet("...into $buildDir")
			into(buildDir)
		}
	}
}

tasks.register("deployTomcatRuntime") {
	group = project.name
	description = "Copy artifacts to tomcat libraries directory."
	dependsOn("copyServerRuntime")
	doLast {
		copy {
			// Find server
			val catalinaHome = System.getenv("CATALINA_HOME") ?: throw GradleException("Environment variable CATALINA_HOME expected!")
			logger.quiet("CATALINA_HOME: $catalinaHome")
			// Source
			logger.quiet("From $buildDir...")
			from(buildDir)
			// Destination
			val destinationDir = File(catalinaHome).resolve("lib")
			logger.quiet("...into $destinationDir")
			into(destinationDir)
		}
	}
}