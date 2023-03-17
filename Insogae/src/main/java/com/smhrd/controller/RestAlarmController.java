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
		
		user = request.getParameter("COMPANY_ID");
		
		List<Alarm>alarmlist = mapper.alarmlist(user);
		System.out.println(alarmlist.get(0));
		return alarmlist;
	}
	
	@RequestMapping("/alarm_data")
	public String dangerData(String user, String tankId, String[] dangerDataList, String[] dangerDataNameList, HttpServletRequest request) {
		user = request.getParameter("userData");
		tankId = request.getParameter("tankIdData");
		dangerDataList = request.getParameterValues("dangerData");// 데이터 종류수 (DO, Ph, 온도, 염도) [do_data, ph_data, temp_data, salt_data]
		dangerDataNameList = request.getParameterValues("dangerDataName");
		System.out.println(dangerDataList);
		System.out.println(dangerDataNameList);
		int result = 0;
		if(dangerDataNameList!=null && dangerDataList!=null){
		for (int i = 0; i<dangerDataNameList.length;i++) {
				if(dangerDataNameList[i].equals("DO")) {
					result = mapper.addDO(user, tankId, dangerDataList[0], "DO");
				}
				if(dangerDataNameList[i].equals("pH")) {
					result = mapper.addPH(user, tankId, dangerDataList[1], "pH");
				}
				if(dangerDataNameList[i].equals("온도")) {
					result = mapper.addTEMP(user, tankId, dangerDataList[2], "온도");
				}
				if(dangerDataNameList[i].equals("염도")) {
					result = mapper.addTEMP(user, tankId, dangerDataList[3], "염도");
				}
			}
		}else {
		}
		if(result!=0) {
			return "true";
		}else {
			return "false";
		}
	}
	
}
