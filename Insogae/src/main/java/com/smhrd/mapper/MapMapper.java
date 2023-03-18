package com.smhrd.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.smhrd.entity.Tank;


@Mapper
public interface MapMapper {

	
	List<Tank>mapdata1();
	List<Tank>mapdata2();
	List<Tank>mapdata3();
	
}
