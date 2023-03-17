package com.smhrd.websocket;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.AbstractWebSocketHandler;

// 웹소켓 두번째 터널 핸들링
@Controller
@RequestMapping("/socket2")
public class WebSocketHandler2 extends AbstractWebSocketHandler {
	
	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
//		System.out.println("소켓2");
//		ObjectMapper objectMapper = new ObjectMapper();
//		try {
//			Thread.sleep(3000);
//		} catch (InterruptedException e) {
//			e.printStackTrace();
//		}
//		Timer timer = new Timer();
//		timer.scheduleAtFixedRate(new TimerTask() {
//			public void run() {
//				// 실행할 작업 내용
//				try {
//					List<String> dataOne = databaseService.getDataOne();
//					String jsonDataOne = objectMapper.writeValueAsString(dataOne);
//					session.sendMessage(new TextMessage(jsonDataOne));
//				} catch (IOException e) {
//					e.printStackTrace();
//				}
//			}
//		}, 0, 10000);

	}
}