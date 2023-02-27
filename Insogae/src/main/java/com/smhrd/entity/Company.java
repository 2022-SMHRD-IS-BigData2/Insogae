package com.smhrd.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Company {

	private String COMPANY_ID;
	
	private String COMPANY_PW;
	
	private String COMPANY_NAME;
	
	private String COMPANY_TEL;
	
	private String COMPANY_ADDRESS;
	
}
