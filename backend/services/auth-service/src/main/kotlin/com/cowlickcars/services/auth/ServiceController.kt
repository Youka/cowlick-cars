package com.cowlickcars.services.auth

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ServiceController {
	@GetMapping("/login")
	fun login() = "Hello login world!"
}