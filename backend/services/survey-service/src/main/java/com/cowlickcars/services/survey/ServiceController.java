package com.cowlickcars.services.survey;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class ServiceController {
	@GetMapping("/hello")
	public String getHello() {
		return Optional.of("Hello survey world!").get();
	}
}
