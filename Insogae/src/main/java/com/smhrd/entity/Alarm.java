package com.smhrd.entity;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Alarm {

	private int ALARM_SEQ;
	private String TANK_ID;
	private String ALARM_CONTENT;
	private Timestamp ALARM_DATE;
	private String COMPANY_ID;
	
}
