package com.cowlickcars.services.survey

import org.apache.logging.log4j.LogManager
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice

@RestControllerAdvice
class ServiceExceptionHandler {
	private val log = LogManager.getLogger(this.javaClass)

	@ExceptionHandler
	fun handleThrowable(t: Throwable) =
		ResponseEntity(
			"${HttpStatus.INTERNAL_SERVER_ERROR.reasonPhrase} (see logs for details)",
			HttpStatus.INTERNAL_SERVER_ERROR
		).also {
			log.error("Exception by REST controller: ", t)
		}
}