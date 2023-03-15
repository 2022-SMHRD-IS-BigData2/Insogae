package com.smhrd.websocket;

import javax.websocket.*;
import javax.websocket.server.*;

@ServerEndpoint("/socket")
public class MyWebSocketEndpoint {
    @OnOpen
    public void onOpen(Session session) {
        // 세션 연결 시 실행될 코드
    }

    @OnMessage
    public void onMessage(String message, Session session) {
        // 메시지 수신 시 실행될 코드
    }

    @OnClose
    public void onClose(Session session) {
        // 세션 종료 시 실행될 코드
    }

    @OnError
    public void onError(Throwable error) {
        // 오류 발생 시 실행될 코드
    }
}