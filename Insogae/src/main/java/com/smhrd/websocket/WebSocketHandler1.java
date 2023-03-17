package com.smhrd.websocket;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.AbstractWebSocketHandler;

import com.fasterxml.jackson.databind.ObjectMapper;

// 웹소켓 첫번째 소켓 터널 핸들링
@Controller
@RequestMapping("/socket1")
public class WebSocketHandler1 extends AbstractWebSocketHandler {

	@Autowired
	private DatabaseService databaseService;
	

	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		// 클라이언트로부터 메시지를 받았을 때 실행됩니다.
		// 이 예제에서는 메시지를 처리하지 않습니다.
		System.out.println("소켓1 요청들어옴");
		ObjectMapper objectMapper = new ObjectMapper();
		
		// DB로부터 데이터 리스트형태로 받아오기
		List<String> data = databaseService.getData();
		
		// data -> json형태의 String(문자열)로 변환
		String jsonData= objectMapper.writeValueAsString(data);
		// 클라이언트로 메시지(jsonData) 전송
		session.sendMessage(new TextMessage(jsonData));
	}
}