package com.smhrd.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.smhrd.entity.TankData;

@Mapper
public interface TankMapper {
	
	public List<TankData> dataCheck(); 
	public List<TankData> dataCheck2(String number);// 시퀀스 번호 입력받아 출력하는 메소드
	public List<TankData> tank1data(); // WT11수조의 데이터
	public List<TankData> tank2data(); // WT11수조의 데이터
	
	
}
