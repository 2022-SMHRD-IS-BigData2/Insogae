package com.smhrd.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.smhrd.entity.TankData;

@Mapper
public interface TankMapper {
	
	public List<TankData> dataCheck(); 
	public List<TankData> dataCheck2(String number);// 시퀀스 번호 입력받아 출력하는 메소드
	public List<TankData> timedata(); // 테스트중
	
}
