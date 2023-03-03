package com.smhrd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.smhrd.entity.Company;
import com.smhrd.entity.Tank_data;
import com.smhrd.mapper.Companymapper;
import com.smhrd.mapper.Tankmapper;

@Controller
public class TankDataController {

	@Autowired
	private Tankmapper mapper;

	
	@RequestMapping("/datacheck.do")
	public String dataCheck(Model model, Company company) {
	List<Tank_data> data = mapper.dataCheck();
	
	System.out.println(data.get(0).getDO());  // data에 정보 들어있음
	
	model.addAttribute("data",data);
	
	//Company compnay = com_mapper.login(company);
	///model.addAttribute("result",compnay);
	
	return "main";
	
	}
	
}
