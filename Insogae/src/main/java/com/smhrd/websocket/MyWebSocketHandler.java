package com.smhrd.websocket;


import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.AbstractWebSocketHandler;

@Component
public class MyWebSocketHandler extends AbstractWebSocketHandler {
	
	// 웹소켓 메시지 핸들링
	// 클라이언트로 메시지 받았을때 실행되는 메소드
	// 현재 사용중이 아님. 
	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		// 클라이언트로부터 메시지를 받았을 때 실행됩니다.
		String payload = message.getPayload().toString();
        System.out.println("Received message: " + payload);
		session.sendMessage(new TextMessage(payload));
	}
}