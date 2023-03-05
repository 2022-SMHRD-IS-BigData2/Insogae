package com.smhrd.entity;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TankData {
	
	private int RECORD_SEQ;
	private Timestamp RECORD_DATE;
	private String TANK_ID;
	private float DO;
	private float PH;
	private float TEMP;
	private float SALT;
	
	
}
