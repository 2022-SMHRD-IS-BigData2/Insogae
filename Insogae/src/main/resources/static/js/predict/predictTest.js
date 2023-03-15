const webSocket = new WebSocket('ws://localhost:8882/websocket');

webSocket.onopen = function() {
    console.log('WebSocket 연결이 열렸습니다.');
};

webSocket.onmessage = function(event) {
    console.log('WebSocket 메시지를 수신했습니다: ' + event.data);
    webSocket.onmessage = function(event) {
    	  const data = JSON.parse(event.data);
    	  console.log(data);
    	};
};

webSocket.onclose = function(event) {
    console.log('WebSocket 연결이 닫혔습니다.');
};