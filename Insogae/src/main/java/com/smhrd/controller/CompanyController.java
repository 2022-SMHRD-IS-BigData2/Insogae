package com.smhrd.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.support.SessionStatus;


@Controller
public class CompanyController {
	
	@RequestMapping("/goLogin.do")
	public String goLogin() {
		return "redirect:/"; // 로그인 페이지 리다이렉트 이동
	}
	@RequestMapping("/")
	public String login() {
		return "login"; // 로그인 페이지로 포워드 이동 http://localhost:8882/login
	}
	@RequestMapping("/goJoin.do")
	public String goJoin() {
		return "redirect:/join"; // 회원가입페이지 리다이렉트 이동
	}
	@RequestMapping("/join")
	public String join() {
		return "join"; // 회원가입페이지 포워드 이동 http://localhost:8882/join
	}
	@RequestMapping("/goMain.do")
	public String goMain() {
		return "redirect:/main"; // 메인페이지(양식장 모니터링) 리다이렉트 이동
	}
	@RequestMapping("/main")
	public String main() {
		return "main";  // 메인페이지(양식장 모니터링) 포워드이동 http://localhost:8882/main
	}
	@RequestMapping("/goPredict.do")
	public String goPredict() {
		return "redirect:/predict";// ->> 수질 예측 리다이렉트 이동 
	}
	@RequestMapping("/predict")
	public String predict() {
		return "predict";// ->> 수질 예측 포워드 이동 http://localhost:8882/predict
	}	
	@RequestMapping("/goSetting.do")
	public String goSetting() {
		return "redirect:/setting";// ->> 환경 설정 리다이렉트 이동 
	}
	@RequestMapping("/setting")
	public String setting() {
		return "setting";// ->> 환경 설정 포워드 이동 http://localhost:8882/predict
	}	
	@RequestMapping("/goWaterguard.do")
	public String goWaterguard() {
		return "redirect:/waterguard"; // 메인페이지(양식장 모니터링) 리다이렉트 이동
	}
	@RequestMapping("/waterguard")
	public String waterguard() {
		return "waterguard";  // 메인페이지(양식장 모니터링) 포워드이동 http://localhost:8882/main
	}
	@RequestMapping("/logout.do")
	public String logout(SessionStatus session) {
		session.setComplete();
		return "redirect:/"; // 로그아웃 및 세션종료
	}
	
	@RequestMapping("/gograph")
	public String goGraph() {
		return "graph";
	}
}
