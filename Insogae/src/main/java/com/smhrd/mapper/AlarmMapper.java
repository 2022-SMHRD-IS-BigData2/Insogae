package com.smhrd.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.smhrd.entity.Alarm;

@Mapper
public interface AlarmMapper {

	public List<Alarm>alarmlist(String User);
	
	public int addDO(String user, String tankId, String dangerDO, String dataName);
	public int addPH(String user, String tankId, String dangerPH, String dataName);
	public int addSALT(String user, String tankId, String dangerSALT, String dataName);
	public int addTEMP(String user, String tankId, String dangerSALT, String dataName);
	
}
