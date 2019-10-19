package com.cowlickcars.services.division

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.io.NotActiveException

@RestController
class ServiceController {
	// Interfaces
	@GetMapping("/fatal")
	fun getFatal(): Nothing = throw NotActiveException("Uncatched exception!!!")

	@GetMapping("/mypath/{group}/{method}")
	fun getMyPath(@PathVariable group: String, @PathVariable method: String, @RequestParam id: String) =
		"Group: $group - Method: $method - Id: $id"
}