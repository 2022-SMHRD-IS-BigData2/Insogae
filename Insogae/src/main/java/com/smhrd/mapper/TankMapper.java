package com.smhrd.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.smhrd.entity.TankData;

@Mapper
public interface TankMapper {
	
	public List<TankData> dataCheck(); 
	public List<TankData> dataCheck2(String number);// 시퀀스 번호 입력받아 출력하는 메소드
	public List<TankData> timedata(); // 수조1
	public List<TankData> tank2data(); // 수조2
	public List<TankData> tank3data(); // 수조3
	public List<TankData> tank4data(); // 수조4
	public List<TankData> tank5data(); // 수조5
	public List<TankData> tank6data(); // 수조6
	public List<TankData> tank7data(); // 수조7
	public List<TankData> tank8data(); // 수조8
	
}
