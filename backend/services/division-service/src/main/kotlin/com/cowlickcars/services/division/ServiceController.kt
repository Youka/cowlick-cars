package com.cowlickcars.services.division

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ServiceController {
	@GetMapping("/division")
	fun division() = "Hello division world!"
}