package com.smhrd.websocket;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;


// 웹소켓 설정 class파일
@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {
	
		private final MyWebSocketHandler myWebSocketHandler;
		
		public WebSocketConfig(MyWebSocketHandler myWebSocketHandler) {
		        this.myWebSocketHandler = myWebSocketHandler;
		}
		@Autowired
	    private WebSocketHandler1 firstWebSocketHandler;
	    
	    @Autowired
	    private WebSocketHandler2 secondWebSocketHandler;
	    
	    // 웹소켓 주소 설정 및 허가
	    @Override
	    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
	        registry.addHandler(firstWebSocketHandler, "socket1").setAllowedOrigins("*");
	        registry.addHandler(secondWebSocketHandler, "socket2").setAllowedOrigins("*");
	        registry.addHandler(myWebSocketHandler, "/socket").setAllowedOrigins("*");
	    }
	    
	    
	    
}