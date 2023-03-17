package com.smhrd.websocket;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.AbstractWebSocketHandler;

import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
@RequestMapping("/socket1")
public class WebSocketHandler1 extends AbstractWebSocketHandler {

	@Autowired
	private DatabaseService databaseService;
	

	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		// 클라이언트로부터 메시지를 받았을 때 실행됩니다.
		// 이 예제에서는 메시지를 처리하지 않습니다.
		System.out.println("소켓1");
		ObjectMapper objectMapper = new ObjectMapper();
		
		List<String> data = databaseService.getData();
		String jsonData= objectMapper.writeValueAsString(data);
		session.sendMessage(new TextMessage(jsonData));
	}
}