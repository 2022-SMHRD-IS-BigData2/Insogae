package com.smhrd.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smhrd.entity.Company;
import com.smhrd.mapper.Companymapper;



@RestController
public class RestCompanyController {

	@Autowired
	private Companymapper mapper; 
	
	
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
	
	
	
	
}
