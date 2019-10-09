// Project information
description = "Root project of cowlick-cars backend."
version = "1.0-SNAPSHOT"

// Import global plugins
plugins {
	// Kotlin compiler with target JVM
	kotlin("jvm").version("1.3.50")
	// Opens spring-annotated kotlin classes for required code generation
	kotlin("plugin.spring").version("1.3.50")
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
	apply(plugin = "kotlin-spring")
	dependencies {
		// Kotlin
		compileOnly("org.jetbrains.kotlin:kotlin-stdlib-jdk8")	// Version provided by plugin
		compileOnly("org.jetbrains.kotlin:kotlin-reflect")	// Version provided by plugin
		// REST + JSON
		compileOnly("org.springframework:spring-webmvc:${properties["spring.version"]}")
		compileOnly("com.fasterxml.jackson.core:jackson-databind:${properties["jackson.version"]}")
		// JDBC
		compileOnly("org.springframework:spring-jdbc:${properties["spring.version"]}")
		compileOnly("org.postgresql:postgresql:${properties["postgresql.version"]}")
		// Security
		compileOnly("org.springframework.security:spring-security-web:${properties["spring.version"]}")
		compileOnly("org.springframework.security:spring-security-config:${properties["spring.version"]}")
		// Logging
		compileOnly("org.apache.logging.log4j:log4j-web:${properties["log4j.version"]}")
		// Cache
		compileOnly("org.springframework:spring-context-support:${properties["spring.version"]}")
		compileOnly("com.github.ben-manes.caffeine:caffeine:${properties["caffeine.version"]}")
	}
}

// Tasks to execute by missing input (available projects & task)
defaultTasks = mutableListOf("projects", "tasks")