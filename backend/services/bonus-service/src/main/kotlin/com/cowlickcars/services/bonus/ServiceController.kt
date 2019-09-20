package com.cowlickcars.services.bonus

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ServiceController {
	@GetMapping("/bonus")
	fun login() = "Hello bonus world!"
}