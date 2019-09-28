package com.cowlickcars.services.auth

import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.jdbc.core.BeanPropertyRowMapper
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.io.NotActiveException
import java.time.ZonedDateTime

@RestController
open class ServiceController(
	private val jdbc: JdbcTemplate
) {
	@GetMapping("/test")
	fun getTest(): Nothing = throw NotActiveException("Test exception for logging!!!")

	@GetMapping("/session")
	fun getSession(auth: Authentication?) = auth?.run {
		ResponseEntity(
			"User: $name<br />Authorities: $authorities",
			HttpHeaders().apply {
				setExpires(ZonedDateTime.now().plusMinutes(120))
			},
			HttpStatus.ACCEPTED
		)
	}

	@GetMapping("/info")
	@PreAuthorize("hasAuthority('administrator')")
	open fun getInfo(@RequestParam username: String) = this.jdbc.queryForObject(
			"SELECT * FROM auth.v_enabled_users WHERE username = ?",
			BeanPropertyRowMapper(UserInfo::class.java),
			username
	)
	data class UserInfo(
		var username: String = "",
		var roles: String = "",
		var firstName: String = "",
		var lastName: String = "",
		var eMail: String = ""
	)
}