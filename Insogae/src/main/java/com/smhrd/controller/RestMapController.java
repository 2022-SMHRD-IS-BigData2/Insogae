package com.smhrd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smhrd.entity.Tank;
import com.smhrd.mapper.MapMapper;


@RestController
public class RestMapController {
	
	@Autowired
	private MapMapper mapper;
	
	
	@RequestMapping("/mapdata1")
	public List<Tank>mapdata1(){
		
		 List<Tank>data1 = mapper.mapdata1();
		
		return data1;
	}
	
	@RequestMapping("/mapdata2")
	public List<Tank>mapdata2(){
		
		 List<Tank>data2 = mapper.mapdata2();
		
		return data2;
	}
	
	@RequestMapping("/mapdata3")
	public List<Tank>mapdata3(){
		
		 List<Tank>data3 = mapper.mapdata3();
		
		return data3;
	}
	
}
