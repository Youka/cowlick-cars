package com.cowlickcars.services.auth

import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ServiceController {
	@GetMapping("/login")
	fun login() = ResponseEntity(
		"Hello login world!" to 42,
		HttpHeaders().apply {
			setBasicAuth("tomcat", "tomcat")
		},
		HttpStatus.ACCEPTED
	)
}