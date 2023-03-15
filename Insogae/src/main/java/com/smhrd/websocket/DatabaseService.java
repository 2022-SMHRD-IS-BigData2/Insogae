package com.smhrd.websocket;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.WebSocketHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class DatabaseService {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    private static final Logger logger = LoggerFactory.getLogger(WebSocketHandler.class);
    
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
    
}