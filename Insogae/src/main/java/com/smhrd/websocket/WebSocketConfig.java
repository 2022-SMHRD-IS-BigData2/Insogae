package com.smhrd.websocket;


import java.util.logging.SocketHandler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;


@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {
	
	    @Autowired
	    private WebSocketHandler webSocketHandler;
	    
	    
	    @Override
	    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
	        registry.addHandler(webSocketHandler, "/socket").setAllowedOrigins("*");
	    }
	    

//	    @Bean
//	    public WebSocketHandler myWebSocketHandler() {
//	        return new MyWebSocketHandler();
//	    }

	    // ...

	  

}