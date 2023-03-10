package com.smhrd.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.smhrd.entity.Alarm;

@Mapper
public interface AlarmMapper {

	public List<Alarm>alarmlist(String User);
	
	public List<Alarm>addDO(String user, String tankId, String dangerDO);
	public List<Alarm>addPH(String user, String tankId, String dangerPH);
	public List<Alarm>addSALT(String user, String tankId, String dangerSALT);
	public List<Alarm>addTEMP(String user, String tankId, String dangerSALT);
	
}
