package com.smhrd.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.smhrd.entity.TankData;
import com.smhrd.mapper.TankMapper;
@SessionAttributes("timetank")
@RestController
public class RestTankDataController {
	
	@Autowired
	private TankMapper mapper;


	
	
	@RequestMapping("/search")
	public List<TankData> dataSearch(String number) {
		
		List<TankData>tankdata = mapper.dataCheck2(number);
		return tankdata;
	}
	
	@RequestMapping("/tank1")
	public List<TankData>Tank1data(HttpSession session){ 
	List<TankData>timetank= mapper.tank1data();
	session.setAttribute("timetank", timetank);
	return timetank;
	}
	
	@RequestMapping("/tank2")
	public List<TankData>Tank2data(HttpSession session){ 
	List<TankData>timetank2= mapper.tank2data();
	session.setAttribute("timetank", timetank2);
	return timetank2;
	}
	
	
}
