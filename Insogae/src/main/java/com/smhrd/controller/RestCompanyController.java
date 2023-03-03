package com.smhrd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.smhrd.entity.Company;
import com.smhrd.entity.Tank_data;
import com.smhrd.mapper.Companymapper;
import com.smhrd.mapper.Tankmapper;



@RestController
@SessionAttributes("user") //로그인 후 세션에 저장 하기위한 어노테이션 나중에 로그인 함수에서 바인딩할때 user와 이름 같게 하면 된다.
public class RestCompanyController {

	@Autowired
	private Companymapper mapper; 
	@Autowired
	private Tankmapper tankmapper;
	
	
	// aJax 는 비동기 통신이기 때문에 문자열이나 데이터와 같은 데이터를 받는다.
	// 그래서 @ResponseBody를 리턴타입 앞에 붙여서 사용한다.
	// 리턴 값 한글 일때	
	// value : URLMapping(문자열)
	// produces : Content type (문자열) : "어떤형식 ; charset=utf-8"    (인코딩 작업)
	@RequestMapping(value="/idCheck",produces = "application/text ; charset=utf-8")
	public String idCheck(String COMPANY_ID) {
		System.out.println("요청성공");	
		
		// 1. 파라미터 수집
		
		// 2. mapper에 기능 정의
		
		// 3. 정의된 기능 사용
		Company company = mapper.idCheck(COMPANY_ID);
		
		// 4. 사용가능? 불가능?
		if(company ==null) {
			// 중복 X 사용가능0
			return "true";
		}else {
			// 중복 존재
			return "false";
		}
	}
	
	// 회원가입 메소드 
	@RequestMapping("join.do")
	public String join(Company company, Model model) {
		mapper.join(company);
		Company user = mapper.login(company);
		List<Tank_data> tank = tankmapper.dataCheck();
		
		model.addAttribute("tank",tank);
		
		if(user!=null) {
			System.out.println("로그인 성공");
			
			model.addAttribute("user",user);
			return "true"; // join.js -> ajax로 true (res, 응답) 리턴
		}else {
			System.out.println("로그인실패");
			return "false"; // join.js -> ajax로 true (res, 응답) 리턴
		}
	}
	// 로그인 메소드 ( 로그인시 TANK_DATA 테이블 데이터도 갖고옴)
	//            ( 로그인시 Company user에 세션으로 저장)
	@RequestMapping("login.do")
	public String login(Company company, Model model) {
		Company user = mapper.login(company);
		List<Tank_data> tank = tankmapper.dataCheck();
		
		model.addAttribute("tank",tank);
		
		if(user!=null) {
			System.out.println("로그인 성공");
			
			model.addAttribute("user",user);
			return "true";  // login.js -> ajax로 true (res, 응답) 리턴
		}else {
			System.out.println("로그인실패");
			return "false"; // login.js -> ajax로 false (res, 응답) 리턴
		}
	}
}
