// Project information
description = "Services management project."
version = "1.0-SNAPSHOT"

// Apply for multiple projects
subprojects {
	apply(plugin = "war")
	tasks.named<War>("war") {
		archiveFileName.set("${archiveBaseName.get()}.${archiveExtension.get()}")
	}
	dependencies {
		compileOnly("javax.servlet:javax.servlet-api:4.0.1")
	}
	tasks.register("deployTomcatService") {
		group = project.name
		description = "Copy ${project.name} to tomcat web applications directory."
		dependsOn("clean", "war")
		doLast {
			copy {
				// Find server
				val catalinaHome = System.getenv("CATALINA_HOME") ?: throw GradleException("Environment variable CATALINA_HOME expected!")
				logger.quiet("CATALINA_HOME: $catalinaHome")
				// Source
				val sourceDir = tasks.named<War>("war").get().archiveFile.get()
				logger.quiet("From $sourceDir...")
				from(sourceDir)
				// Destination
				val destinationDir = File(catalinaHome).resolve("webapps")
				logger.quiet("...into $destinationDir")
				into(destinationDir)
			}
		}
	}
}