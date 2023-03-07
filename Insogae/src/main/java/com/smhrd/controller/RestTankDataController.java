package com.smhrd.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smhrd.entity.Company;
import com.smhrd.entity.Tank;
import com.smhrd.entity.TankData;
import com.smhrd.mapper.TankMapper;

@RestController
public class RestTankDataController {
	
	@Autowired
	private TankMapper mapper;
	

	
	
	@RequestMapping("/search")
	public List<TankData> dataSearch(String number) {
		
		List<TankData>tankdata = mapper.dataCheck2(number);
		return tankdata;
	}
	
	
	
	
	@RequestMapping("/tank1data")
	public List<TankData>tank1data(){ 
		
	List<TankData>timetank= mapper.timedata();
	return timetank;
	}
	
	
	@RequestMapping("/tank2data")
	public List<TankData>tank2data(){ 
		
	List<TankData>tank2_data= mapper.tank2data();
	return tank2_data;
	}
	
	
	@RequestMapping("/tank3data")
	public List<TankData>tank3data(){ 
		
	List<TankData>tank3_data= mapper.tank3data();
	return tank3_data;
	}
	
	@RequestMapping("/tank4data")
	public List<TankData>tank4data(){ 
		
	List<TankData>tank4_data= mapper.tank4data();
	return tank4_data;
	}
	
	@RequestMapping("/tank5data")
	public List<TankData>tank5data(){ 
		
	List<TankData>tank5_data= mapper.tank5data();
	return tank5_data;
	}
	
	
	@RequestMapping("/tank6data")
	public List<TankData>tank6data(){ 
		
	List<TankData>tank6_data= mapper.tank6data();
	return tank6_data;
	}
	
	@RequestMapping("/tank7data")
	public List<TankData>tank7data(){ 
		
	List<TankData>tank7_data= mapper.tank7data();
	return tank7_data;
	}
	
	@RequestMapping("/tank8data")
	public List<TankData>tank8data(){ 
		
	List<TankData>tank8_data= mapper.tank8data();
	return tank8_data;
	}
	// 수조 8개까지 요청 메소드...
	
}
