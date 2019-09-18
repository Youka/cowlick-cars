package com.cowlickcars.services.division

import java.io.IOException
import javax.servlet.ServletException
import javax.servlet.annotation.WebServlet
import javax.servlet.http.HttpServlet
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@WebServlet(name = "Division", urlPatterns = ["/division"])
class DivisionServlet : HttpServlet() {
	@Throws(ServletException::class, IOException::class)
	override fun doGet(request: HttpServletRequest, response: HttpServletResponse) {
		response.writer.use { writer ->
			writer.println("Hello division world!")
		}
	}
}