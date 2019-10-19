package com.cowlickcars.services.auth

import org.apache.logging.log4j.LogManager
import org.springframework.dao.DataAccessException
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.jdbc.core.BeanPropertyRowMapper
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class ServiceController(
	private val jdbc: JdbcTemplate
) {
	// Static
	companion object {
		private val log = LogManager.getLogger(ServiceController::class.java)
	}

	// Interfaces
	@GetMapping("/info")
	fun getInfoSelf(auth: Authentication) = this.userInfo(auth.name)

	@GetMapping("/info_admin")
	@PreAuthorize("hasAuthority('administrator')")
	fun getInfoUsername(@RequestParam username: String) = this.userInfo(username)

	// Helpers
	data class UserInfo(
		var username: String = "",
		var roles: String = "",
		var firstName: String = "",
		var lastName: String = "",
		var eMail: String = ""
	)
	private fun userInfo(username: String) =
		try {
			this.jdbc.queryForObject(
				"SELECT * FROM auth.v_enabled_users WHERE username = ?",
				BeanPropertyRowMapper(UserInfo::class.java),
				username
			)?.run {
				ResponseEntity(
					this,
					HttpStatus.OK
				)
			} ?: ResponseEntity(
				HttpStatus.NO_CONTENT.reasonPhrase,
				HttpStatus.NO_CONTENT
			)
		} catch (e: DataAccessException) {
			log.error("User '$username' not found!", e)
			ResponseEntity(
				HttpStatus.NOT_FOUND.reasonPhrase,
				HttpStatus.NOT_FOUND
			)
		}
}