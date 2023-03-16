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
	var dataSet = JSON.parse(event.data);
	console.log(dataSet[0])
	for(let i=0;i<dataSet.length;i++){
		dataSet[i] = dataSet[i].substring(0, dataSet[i].length - 4) + "H" + dataSet[i].substring(dataSet[i].length - 3,dataSet[i].length-1);
	}
	console.log(dataSet[0]);
	dataList = [];
	for (let i =0;i<dataSet.length;i++){
		dataList.push(Object.fromEntries(dataSet[i].split(',').map(item => {
			const [key, value] = item.split(':');
			return [key, value];
		})));
	}

	console.log(dataList);
    
};