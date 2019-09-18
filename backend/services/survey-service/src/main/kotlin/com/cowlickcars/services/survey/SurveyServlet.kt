package com.cowlickcars.services.survey

import java.io.IOException
import javax.servlet.ServletException
import javax.servlet.annotation.WebServlet
import javax.servlet.http.HttpServlet
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@WebServlet(name = "Survey", urlPatterns = ["/survey"])
class SurveyServlet : HttpServlet() {
	@Throws(ServletException::class, IOException::class)
	override fun doGet(request: HttpServletRequest, response: HttpServletResponse) {
		response.writer.use { writer ->
			writer.println("Hello survey world!")
		}
	}
}