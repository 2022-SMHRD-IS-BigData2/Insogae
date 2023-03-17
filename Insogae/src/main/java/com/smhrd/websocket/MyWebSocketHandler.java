package com.smhrd.websocket;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.AbstractWebSocketHandler;

import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class MyWebSocketHandler extends AbstractWebSocketHandler {

	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		// 클라이언트로부터 메시지를 받았을 때 실행됩니다.
		String payload = message.getPayload().toString();
        System.out.println("Received message: " + payload);
		session.sendMessage(new TextMessage(payload));
	}
}