package com.smhrd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.smhrd.entity.Company;
import com.smhrd.entity.TankData;
import com.smhrd.mapper.TankMapper;

@Controller
public class TankDataController {

	@Autowired
	private TankMapper mapper;

	
	@RequestMapping("/datacheck.do")
	public String dataCheck(Model model, Company company) {
	List<TankData> data = mapper.dataCheck();
	
	System.out.println(data.get(0).getDO());  // data에 정보 들어있음
	
	model.addAttribute("data",data);
	
	//Company compnay = com_mapper.login(company);
	///model.addAttribute("result",compnay);
	
	return "main";
	
	}
	
}
