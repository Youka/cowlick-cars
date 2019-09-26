// Project information
description = "Root project of cowlick-cars backend."
version = "1.0-SNAPSHOT"

// Import global plugins
plugins {
	kotlin("jvm").version("1.3.50")
}

// Apply for multiple projects
allprojects {
	group = "com.cowlick-cars"
	repositories {
		mavenCentral()
	}
}
subprojects {
	apply(plugin = "kotlin")
	dependencies {
		// Kotlin
		compileOnly("org.jetbrains.kotlin:kotlin-stdlib-jdk8")	// Version provided by plugin
		compileOnly("org.jetbrains.kotlin:kotlin-reflect")	// Version provided by plugin
		// REST
		compileOnly("org.springframework:spring-webmvc:${properties["spring.version"]}")
		compileOnly("com.fasterxml.jackson.core:jackson-databind:${properties["jackson.version"]}")
		// Data
		compileOnly("org.springframework:spring-jdbc:${properties["spring.version"]}")
		compileOnly("org.postgresql:postgresql:${properties["postgresql.version"]}")
		// Security
		compileOnly("org.springframework.security:spring-security-web:${properties["spring-security.version"]}")
		compileOnly("org.springframework.security:spring-security-config:${properties["spring-security.version"]}")
		// Logging
		compileOnly("org.apache.logging.log4j:log4j-web:${properties["log4j.version"]}")
	}
}

// Tasks to execute by missing input (available projects & task)
defaultTasks = mutableListOf("projects", "tasks")