package com.cowlickcars.services.survey

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.io.NotActiveException

@RestController
class ServiceController {
	@GetMapping("/survey")
	fun survey(): Nothing = throw NotActiveException("Test exception for logging!!!")
}