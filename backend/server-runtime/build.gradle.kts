tasks.register<Copy>("copyServerRuntime") {
	// Sources
	configurations.compileOnly.get().resolvedConfiguration.resolvedArtifacts.forEach { artifact ->
		logger.quiet("Copy ${artifact.id}...")
		from(artifact.file)
	}
	// Destination
	logger.quiet("...into ./runtime")
	into("./runtime")
}