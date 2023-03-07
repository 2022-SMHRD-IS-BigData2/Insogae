package com.smhrd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	
	@RequestMapping("/timetank")
	public List<TankData>timetank(){ 
		
	List<TankData>timetank= mapper.timedata();
	return timetank;
	}
}
