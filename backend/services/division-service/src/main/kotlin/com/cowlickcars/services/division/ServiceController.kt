package com.cowlickcars.services.division

import org.apache.logging.log4j.LogManager
import org.springframework.cache.annotation.Cacheable
import org.springframework.cache.interceptor.KeyGenerator
import org.springframework.stereotype.Component
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.lang.reflect.Method
import java.time.LocalTime
import kotlin.NoSuchElementException
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
	@Cacheable("ServiceCache", keyGenerator = "ServiceCacheKeyGenerator")
	fun getCache() =
		Random.nextInt()
}

@Component("ServiceCacheKeyGenerator")
class ServiceCacheKeyGenerator : KeyGenerator {
	// Static
	companion object {
		private val log = LogManager.getLogger(ServiceCacheKeyGenerator::class.java)
	}

	// Implementation
	override fun generate(target: Any, method: Method, vararg params: Any?) =
		"${method.declaringClass.name}.${method.name}${params.contentToString()}${LocalTime.now().minute}".apply {
			log.debug("Generated cache key: $this")
		}
}