package com.smhrd.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.smhrd.entity.Company;
import com.smhrd.mapper.Companymapper;





@Controller
public class CompanyController {

	@Autowired
	private Companymapper mapper;
	
	@RequestMapping("/")
	public String goIntro() {
			return "intro"; // ->> templates/intro.html
		}
	
	@RequestMapping("/gomain.do")
	public String goMain() {
		return "main";// ->> templates/main.html
	}
	@RequestMapping("/gojoin.do")
	public String goJoin() {
		return "join";
	}
	
	@RequestMapping("/join.do")
	public String join(Company company) {
		mapper.join(company);
		return"redirect:/main.do";
	}
	@RequestMapping("/gologin.do")
	public String goLogin() {
		return "login";
	}
	
	@RequestMapping("/login.do")
	public String Login(Company company, Model model) {
		
		Company result = mapper.login(company);
		
		
		if(result!=null) {
			System.out.println("로그인 성공");
		
			model.addAttribute("result",result);
			
		}else {
			System.out.println("로그인실패");
		}
		//return "redirect:/gomain.do";
		return "main";
	}
	
}
