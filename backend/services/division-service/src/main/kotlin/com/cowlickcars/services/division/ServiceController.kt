package com.cowlickcars.services.division

import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ServiceController {
	@GetMapping("/division")
	fun division(auth: Authentication?) = auth?.run {
		"User: $name<br />Authorities: $authorities"
	}
}