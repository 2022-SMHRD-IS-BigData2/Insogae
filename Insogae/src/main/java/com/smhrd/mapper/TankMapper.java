package com.smhrd.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.smhrd.entity.Company;
import com.smhrd.entity.Tank;
import com.smhrd.entity.TankData;
import com.smhrd.entity.TankDataPre2;

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
	public List<Tank> tank_id(Company company); // 수조8
	public List<TankDataPre2> tankDataPre(String user, String tankId);
	public List<Object> locationData(String user);
	public int locationCount(String user);
	
}
