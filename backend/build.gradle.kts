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
		compileOnly("org.jetbrains.kotlin:kotlin-stdlib-jdk8")	// Version provided by plugin
	}
}

// Tasks to execute by missing input (available projects & task)
defaultTasks = mutableListOf("projects", "tasks")