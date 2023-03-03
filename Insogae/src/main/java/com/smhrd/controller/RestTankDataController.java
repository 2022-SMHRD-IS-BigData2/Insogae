package com.smhrd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smhrd.entity.Tank_data;
import com.smhrd.mapper.Tankmapper;

@RestController
public class RestTankDataController {
	
	@Autowired
	private Tankmapper mapper;


	
	
	@RequestMapping("/search")
	public List<Tank_data> dataSearch(String number) {
		
		List<Tank_data>tankdata = mapper.dataCheck2(number);
		return tankdata;
	}
	
	@RequestMapping("/test")
	public List<Tank_data>timetank(){ 
		
	List<Tank_data>timetank= mapper.timedata();
	return timetank;
	}
}
