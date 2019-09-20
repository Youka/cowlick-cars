package com.cowlickcars.services.auth

import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.jdbc.core.BeanPropertyRowMapper
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.sql.Date

@RestController
class ServiceController(
	private val jdbc: JdbcTemplate
) {
	@GetMapping("/login")
	fun login() = ResponseEntity(
		this.jdbc.query(
			"SELECT script, installed_on FROM public.flyway_schema_history ORDER BY script ASC",
			BeanPropertyRowMapper(FlywayScriptEntity::class.java)
		),
		HttpHeaders().apply {
			setBasicAuth("tomcat", "tomcat")
		},
		HttpStatus.ACCEPTED
	)
}

data class FlywayScriptEntity(
	var script: String? = null,
	var installedOn: Date? = null
)