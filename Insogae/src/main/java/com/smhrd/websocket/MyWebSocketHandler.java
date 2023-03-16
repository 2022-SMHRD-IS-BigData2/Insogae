package com.smhrd.websocket;

import java.io.IOException;
import java.util.List;
import java.util.Timer;
import java.util.TimerTask;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class MyWebSocketHandler extends TextWebSocketHandler {

    @Autowired
    private DatabaseService databaseService;

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        // 클라이언트로부터 메시지를 받았을 때 실행됩니다.
        // 이 예제에서는 메시지를 처리하지 않습니다.
    	ObjectMapper objectMapper = new ObjectMapper();
        
    	Timer timer = new Timer();
    	timer.scheduleAtFixedRate(new TimerTask() {
    		public void run() {
    			// 실행할 작업 내용
			try {
		        // DB에서 데이터 가져오기
		        List<String> data = databaseService.getData();
		     // Object를 JSON 문자열로 변환
		        // ArrayList를 JSON 객체의 속성으로 넣기
		
		        // JSON 문자열로 변환하여 출력
		        // 데이터를 JSON 형식으로 변환
		        System.out.println(data);
		        String jsonData = objectMapper.writeValueAsString(data);
		        System.out.println(jsonData);
				session.sendMessage(new TextMessage(jsonData));
			} catch (IOException e) {
				e.printStackTrace();
			}
        }
    	}, 0, 3000);
    }
}