package com.cowlickcars.services.survey

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ServiceController {
	@GetMapping("/survey")
	fun survey() = "Hello survey world!"
}