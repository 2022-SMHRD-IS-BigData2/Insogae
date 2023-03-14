package com.smhrd.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.smhrd.entity.Company;



@Mapper
public interface CompanyMapper {


	public int join(Company company); // 회원가입 메소드
		
	public Company login(Company company); // 로그인 메소드
	
	public Company idCheck(String COMPANY_ID); // 중복아이디 확인 메소드
	
	public int update(Company company); // 회원정보 수정 메소드
	
}
