// Define root project (=this folder)
rootProject.name = "backend"

// Add sub-projects
include(
	"server-runtime",
	"services:division-service",
	"services:bonus-service",
	"services:survey-service"
)
