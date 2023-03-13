package com.smhrd.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.websocket.Session;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonRootName;
import com.fasterxml.jackson.databind.jsonFormatVisitors.JsonArrayFormatVisitor;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.smhrd.entity.Company;
import com.smhrd.entity.LocationCount;
import com.smhrd.entity.TankDataPre;
import com.smhrd.entity.Tank;
import com.smhrd.entity.TankData;
import com.smhrd.entity.TankDataPre2;
import com.smhrd.mapper.TankMapper;

@RestController
public class RestTankDataController {
	
	@Autowired
	private TankMapper mapper;
	@Autowired
    private JdbcTemplate jdbcTemplate;

	
	
	@RequestMapping("/search")
	public List<TankData> dataSearch(String number) {
		
		List<TankData>tankdata = mapper.dataCheck2(number);
		return tankdata;
	}
	
	
	
	
	@RequestMapping("/tank1data")
	public List<TankData>tank1data(){ 
		
	List<TankData>timetank= mapper.timedata();
	return timetank;
	}
	
	
	@RequestMapping("/tank2data")
	public List<TankData>tank2data(){ 
		
	List<TankData>tank2_data= mapper.tank2data();
	return tank2_data;
	}
	
	
	@RequestMapping("/tank3data")
	public List<TankData>tank3data(){ 
		
	List<TankData>tank3_data= mapper.tank3data();
	return tank3_data;
	}
	
	@RequestMapping("/tank4data")
	public List<TankData>tank4data(){ 
		
	List<TankData>tank4_data= mapper.tank4data();
	return tank4_data;
	}
	
	@RequestMapping("/tank5data")
	public List<TankData>tank5data(){ 
		
	List<TankData>tank5_data= mapper.tank5data();
	return tank5_data;
	}
	
	
	@RequestMapping("/tank6data")
	public List<TankData>tank6data(){ 
		
	List<TankData>tank6_data= mapper.tank6data();
	return tank6_data;
	}
	
	@RequestMapping("/tank7data")
	public List<TankData>tank7data(){ 
		
	List<TankData>tank7_data= mapper.tank7data();
	return tank7_data;
	}
	
	@RequestMapping("/tank8data")
	public List<TankData>tank8data(){ 
		
	List<TankData>tank8_data= mapper.tank8data();
	return tank8_data;
	}
	
	@RequestMapping("/tankData")
	public List<TankData> tankData(String user, HttpServletRequest request) {
		user =  request.getParameter("COMPANY_ID");
		List <TankData> tankData = mapper.tankData(user);
		  return tankData;
	}
	// 수조 8개까지 요청 메소드...
	
	// 실제값 예측값 같이 있는 테이블 반환
	@RequestMapping("/tank_data_pre")
	public List<TankDataPre2> tank_data_pre(String user, HttpServletRequest request, Model model){
		user = request.getParameter("userData");
		System.out.println(user);
		List<TankDataPre2> tank_data_pre = mapper.tankDataPre(user);
		model.addAttribute("tank_data_pre", tank_data_pre);
		return tank_data_pre;
	}
	
	
	@RequestMapping("/location_data") 
	public List<Object> locationData(String user, HttpServletRequest request) { 
		String sql ="select A.LOCATION as loc, COUNT(*) as cnt, SUM(A.INIT_POP) as sum from TANK A, COMPANY B " +
					"where A.COMPANY_ID = B.COMPANY_ID " + "and B.COMPANY_ID = 'insogae'" +
					"group by A.LOCATION"; 
		return jdbcTemplate.query(sql, (rs, rowNum) -> new LocationCount(
				rs.getString("loc"), 
				rs.getLong("cnt"),
				rs.getLong("sum")
				)); 
	}
	
	
	/*
	 * @RequestMapping("/datamonitoring") // 50개 데이터 가져오는 public void
	 * monitoring(String[] tankId,HttpServletRequest request){
	 * 
	 * tankId = request.getParameterValues("tankId"); List<TankDataPre2>
	 * tank_data_pre = mapper.monitoringdata(tankId);
	 * System.out.println(tank_data_pre); }
	 */
	
	
	
	
	
	
	  @PostMapping("/datamonitoring") // 50개 데이터 가져오는 public
	  public List<TankDataPre2> monitoring(@RequestBody List<String> tankId){
		  System.out.println(tankId);
		  for (String tank : tankId) {
			if(tank.equals("WT11")) {
				
			}
		}
		  return null;
	  }
	 
	
	
//	@PostMapping("/datamonitoring")
//	public ResponseEntity<?> handleRequest(@RequestBody Tank tank) {
//		
//		System.out.println("성공?");
//	    // request handling logic
//	    return ResponseEntity.ok().build();
//	}
	
	
}
	


