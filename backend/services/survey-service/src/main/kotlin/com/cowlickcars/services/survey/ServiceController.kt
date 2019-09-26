package com.cowlickcars.services.survey

import org.apache.logging.log4j.LogManager
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ServiceController {
	private val log = LogManager.getLogger(this.javaClass)

	@GetMapping("/survey")
	fun survey(): String {
		log.debug("Log greeting from survey service!")
		return "Hello survey world!"
	}
}