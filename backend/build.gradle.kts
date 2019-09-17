// Project information
description = "Root project of cowlick-cars backend."
// Artifact information
version = "1.0-SNAPSHOT"

// Apply for all projects in hierarchy
allprojects {
	// Artifact information
	group = "com.cowlick-cars"
}
// Apply for all sub-projects (of this/root)
subprojects {
	// Source repositories for dependencies & plugins
	repositories {
		mavenCentral()
	}
	// Enable java-based dependencies system
	apply(plugin = "java")
	// Dependencies management for sub-projects
	dependencies {
		val compileOnly by configurations
		compileOnly("org.jetbrains.kotlin:kotlin-stdlib:${properties["kotlin-stdlib.version"]}")
	}
}

// Tasks to execute by missing input
defaultTasks = mutableListOf("projects", "tasks")