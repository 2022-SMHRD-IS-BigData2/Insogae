package com.smhrd.websocket;


import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;

@Component("myWebSocketHandler")
public class MyWebSocketHandler implements WebSocketHandler{


    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        // 연결이 성립되면 호출되는 메서드
    }

    @Override
    public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception {
        // 클라이언트로부터 메시지가 도착하면 호출되는 메서드
    }

    @Override
    public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
        // 전송 에러가 발생하면 호출되는 메서드
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus) throws Exception {
        // 연결이 종료되면 호출되는 메서드
    }

    @Override
    public boolean supportsPartialMessages() {
        return false;
    }

	
}