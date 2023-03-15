package com.smhrd.websocketconfig;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.WebSocketHandler;

import com.smhrd.websocket.MyWebSocketHandler;

@Configuration
public class WebSocketConfig {

    @Bean
    public WebSocketHandler myWebSocketHandler() {
        return new MyWebSocketHandler();
    }

}