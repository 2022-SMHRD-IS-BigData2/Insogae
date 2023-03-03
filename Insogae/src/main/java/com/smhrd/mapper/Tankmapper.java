package com.smhrd.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.smhrd.entity.Tank_data;

@Mapper
public interface Tankmapper {
	
	public List<Tank_data> dataCheck(); 
	public List<Tank_data> dataCheck2(String number);// 시퀀스 번호 입력받아 출력하는 메소드
	public List<Tank_data> timedata(); // 테스트중
	
}
