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
	@RequestMapping("/main.do")
	public String goMain() {
		return "menu1";// ->> templates/menu1.html 양식장모니터링 포워드 이동
	}
	@RequestMapping("/predict.do")
	public String goPredict() {
		return "predict";// ->> templates/predict.html 수질 예측 포워드 이동
	}
	@RequestMapping("/gojoin.do")
	public String goJoin() {
		return "redirect:/join.do"; // --> templates/join.html 회원가입 이동
	}
	@RequestMapping("/join.do")
	public String join() {
		return "join"; // --> templates/join.html 회원가입 이동
	}
	
	@RequestMapping("/join")
	public String join(Company company, Model model, Tank_data data) {
		int result = mapper.join(company);
		List<Tank_data> tank = tankmapper.dataCheck();
		if(result!=0) {
			System.out.println("회원가입 성공");
			
			model.addAttribute("result",result);
			model.addAttribute("tank",tank);
			return "redirect:/main.do";
		}else {
			System.out.println("회원가입 실패");
			return "login";
		}
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
			return "redirect:/main.do";
		}else {
			System.out.println("로그인실패");
			return "login";
		}
		//return "redirect:/gomain.do";
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
	@RequestMapping("/menu2")
	public String goMenu2() {
		return "menu2";
	}
}
