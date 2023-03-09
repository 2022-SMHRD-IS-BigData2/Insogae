package com.smhrd.entity;

import java.math.BigInteger;
import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Tank {
	
	private String TANK_ID;
	private String COMPANY_ID;
	private String LOCATION;
	private float HEIGHT;
	private float DIAMETER;
	private String VARIETY;
	private Timestamp COMM_DATE;
	private int INIT_POP;
	private int INIT_DENSITY;
	private int START_TEMP;
	private int TANK_NUM;
	private int COUNT;
}
