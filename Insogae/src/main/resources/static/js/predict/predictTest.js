//var socket = new WebSocket("ws://" + location.host + "/myHandler");
//
//socket.onopen = function(event) {
//    console.log("WebSocket 연결이 열렸습니다.");
//    console.log(event);
//};
//
//socket.onmessage = function(event) {
//    // 서버로부터 메시지를 수신한다.
//    const message = JSON.parse(event.data);
//    console.log(message);
//};
//
//socket.onclose = function() {
//    console.log("WebSocket 연결이 닫혔습니다.");
//};
var socket = new WebSocket("ws://localhost:8882/socket");

socket.onopen = function(event) {
    console.dir("WebSocket 연결 성공");
    socket.send("Hello, server!");
};


socket.onmessage = function(event) {
    var data = JSON.parse(event.data);
    console.dir("서버로부터 데이터 수신: " + data);
    console.dir(data);
};