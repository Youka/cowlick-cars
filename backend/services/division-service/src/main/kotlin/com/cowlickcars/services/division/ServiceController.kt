package com.cowlickcars.services.division

import org.springframework.cache.annotation.Cacheable
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import kotlin.random.Random

@RestController
class ServiceController {
	// Interfaces
	@GetMapping("/fatal")
	fun getFatal(): Nothing =
		throw NoSuchElementException("Uncatched exception!!!")

	@GetMapping("/mypath/{group}/{method}")
	fun getMyPath(@PathVariable group: String, @PathVariable method: String, @RequestParam id: String) =
		"Group: $group - Method: $method - Id: $id"

	@GetMapping("cache")
	@Cacheable("ServiceCache", key = "#root.targetClass + #root.methodName + #root.args")
	fun getCache(@RequestParam state: Int) =
		Random.nextInt()
}