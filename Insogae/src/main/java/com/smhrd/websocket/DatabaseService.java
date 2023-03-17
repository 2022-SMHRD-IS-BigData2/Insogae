package com.smhrd.websocket;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class DatabaseService {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    // 예측값 및 실제값 가져오기 (가장최근 15개 행)
    public List<String> getData() {
        String query = "SELECT * FROM PREDICT_VIEW";
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(query);
        List<String> data = new ArrayList<>();
        System.out.println(data);
        for (Map<String, Object> row : rows) {
            String rowData = "";
            for (String key : row.keySet()) {
                rowData += key + ":" + row.get(key) + ",";
            }
            data.add(rowData);
            
        }
        return data;
    }
    
    
//    public List<String> getDataOne() {
//    	String query = "SELECT t1.*\r\n"
//    			+ "FROM PREDICT_VIEW t1\r\n"
//    			+ "INNER JOIN (\r\n"
//    			+ "  SELECT TANK_ID, MAX(RECORD_DATE) AS MAX_RECORD_DATE\r\n"
//    			+ "  FROM PREDICT_VIEW\r\n"
//    			+ "  GROUP BY TANK_ID\r\n"
//    			+ ") t2 ON t1.TANK_ID = t2.TANK_ID AND t1.RECORD_DATE = t2.MAX_RECORD_DATE\r\n";
//    	List<Map<String, Object>> rows = jdbcTemplate.queryForList(query);
//    	List<String> data = new ArrayList<>();
//    	System.out.println(data);
//    	for (Map<String, Object> row : rows) {
//    		String rowData = "";
//    		for (String key : row.keySet()) {
//    			rowData += key + ":" + row.get(key) + ",";
//    		}
//    		data.add(rowData);
//    		
//    	}
//    	return data;
//    }
    
}