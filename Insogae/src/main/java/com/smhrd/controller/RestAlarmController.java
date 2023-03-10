package com.smhrd.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smhrd.entity.Alarm;
import com.smhrd.entity.Company;
import com.smhrd.mapper.AlarmMapper;

@RestController
public class RestAlarmController {
	@Autowired
	AlarmMapper mapper;
	
	@RequestMapping("/testlist")
	public List<Alarm> testlist(String user, HttpServletRequest request) {
		
		user = request.getParameter("userData");
		
		List<Alarm>alarmlist = mapper.alarmlist(user);
		System.out.println(alarmlist);
		return alarmlist;
	}
	
}
