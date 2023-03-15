package com.smhrd.websocket;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.smhrd.entity.Predict_View;
import com.smhrd.entity.ReadyTankData;

@Component
public class MyWebSocketHandler extends TextWebSocketHandler {

    @Autowired
    private DatabaseService databaseService;

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        // 클라이언트로부터 메시지를 받았을 때 실행됩니다.
        // 이 예제에서는 메시지를 처리하지 않습니다.
    	ObjectMapper objectMapper = new ObjectMapper();
    	String json = objectMapper.writeValueAsString(message);

    	System.out.println(json);
        
        // DB에서 데이터 가져오기
        List<String> data = databaseService.getData();
        Object test =  (Object) data;
        System.out.println(test.getClass());
        System.out.println(test);
        Gson gson = new Gson();
     // Object를 JSON 문자열로 변환
        String jsonString = gson.toJson(test);
        // ArrayList를 JSON 객체의 속성으로 넣기
        JsonObject jsonObject = new JsonObject();
        jsonObject.add("fruits", gson.toJsonTree(data));

        // JSON 문자열로 변환하여 출력
        System.out.println(jsonString);
        // 데이터를 JSON 형식으로 변환
        System.out.println(jsonString);
        System.out.println(data);
//        String jsonData = objectMapper.writeValueAsString(data);
//        session.getAsyncRemote().sendText(jsonData);
        
//        System.out.println(jsonData);
//        ReadyTankData[] obj = objectMapper.readValue(jsonData, ReadyTankData[].class);
//        System.out.println(obj.length);
//    	JsonNode rootNode = objectMapper.readTree(obj);
//    	String fieldValue = rootNode.get(json).asText();
//    	Predict_View predictView = new Predict_View(fieldValue);
        // 변환된 데이터를 클라이언트로 전송
//        session.sendMessage(new TextMessage(obj));
    }
}