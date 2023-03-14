package com.smhrd.entity;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TankDataPre2 {
	
	private int RECORD_PRE_SEQ;
	private String TANK_ID;
	private float DO_ACC;
	private float DO_PRE;
	private float PH_ACC;
	private float PH_PRE;
	private float TEMP_ACC;
	private float TEMP_PRE;
	private float SALT_ACC;
	private float SALT_PRE;
	private Timestamp PRE_RECORD_DATE;
	
}
