package com.smhrd.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.smhrd.entity.Company;
import com.smhrd.mapper.Companymapper;

@Controller
public class MainCon {
	
	@Autowired
	private Companymapper mapper;
	
	@RequestMapping("/")
	public String goIntro() {
			return "intro"; // ->> templates/intro.html
		}
	
	@RequestMapping("/main.do")
	public String goMain() {
		return "main";// ->> templates/main.html
	}
	@RequestMapping("/join.do")
	public String goJoin() {
		return "join";
	}
	
	@RequestMapping("/join.do")
	public String goIntro2(Company company) {
			mapper.join(company);
			return"intro";
	}
	

	
	
	
	
}
