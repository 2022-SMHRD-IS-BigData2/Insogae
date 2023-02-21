package com.smhrd.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainCon {
	
	@RequestMapping("/hello")
	public String goMain() {
			return "helloInsogae"; // ->> templates/boardLIst.html
		}
}
