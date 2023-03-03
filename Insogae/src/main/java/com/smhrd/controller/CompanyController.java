package com.smhrd.controller;


import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import com.smhrd.entity.Company;
import com.smhrd.entity.Tank_data;
import com.smhrd.mapper.Companymapper;
import com.smhrd.mapper.Tankmapper;





@Controller
@SessionAttributes("result") //로그인 후 세션에 저장 하기위한 어노테이션 나중에 로그인 함수에서 바인딩할때 result와 이름 같게 하면 된다.
public class CompanyController {

	@Autowired
	private Companymapper mapper;
	
	@Autowired
	private Tankmapper tankmapper;
	
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
	public String Login(Company company, Model model,Tank_data data) {
		
		Company result = mapper.login(company);
		List<Tank_data> tank = tankmapper.dataCheck();
		
		model.addAttribute("tank",tank);
		
		if(result!=null) {
			System.out.println("로그인 성공");
		
			model.addAttribute("result",result);
			
			
		}else {
			System.out.println("로그인실패");
		}
		//return "redirect:/gomain.do";
		return "main";
	}
	
	@RequestMapping("/logout.do")
	public String logout(SessionStatus session) {
		session.setComplete();
		return "intro";
	}
	
	@RequestMapping("/gograph")
	public String goGraph() {
		return "graph";
	}
	
}
