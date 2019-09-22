package com.cowlickcars.services.auth

import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ServiceController {
	@GetMapping("/auth")
	fun auth(auth: Authentication?) = auth?.run {
		"User: $name<br />Authorities: $authorities"
	}
}