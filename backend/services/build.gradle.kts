// Project information
description = "Services management project."
version = "1.0-SNAPSHOT"

// Resources
val serviceWebXml = projectDir.resolve("web.xml")
val serviceSpringXml = projectDir.resolve("spring.xml")
val serviceLog4j2Xml = projectDir.resolve("log4j2.xml")

// Apply for multiple projects
subprojects {
	// Packaging
	apply(plugin = "war")
	tasks.named<War>("war") {
		webXml = serviceWebXml
		webInf {
			from(serviceSpringXml)
			from(serviceLog4j2Xml)
		}
		archiveFileName.set("${archiveBaseName.get()}.${archiveExtension.get()}")
	}
	tasks.register("deployTomcatService") {
		group = project.name
		description = "Copy ${project.name} to tomcat web applications directory."
		dependsOn("war")
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

	// Server-native dependencies
	dependencies {
		compileOnly("javax.servlet:javax.servlet-api:${properties["servlet-api.version"]}")
	}
}