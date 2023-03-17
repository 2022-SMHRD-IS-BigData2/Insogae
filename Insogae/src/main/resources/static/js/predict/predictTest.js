var socket = new WebSocket("ws://localhost:8882/socket1");
var socket2 = new WebSocket("ws://localhost:8882/socket2");

var socketTest = new WebSocket("ws://localhost:8123/socket");


socketTest.onopen = function() {
	console.dir("WebSocket 연결 성공");
	socketTest.send("Hello, server! script");
};
socketTest.onmessage = function(event) {

	var dataList = JSON.parse(event.data);
	console.log(dataList);	
//	console.log(dataSet[0]);
//	dataList = [];
//	for (let i =0;i<dataSet.length;i++){
//		dataList.push(Object.fromEntries(dataSet[i].split(',').map(item => {
//			const [key, value] = item.split(':');
//			return [key, value];
//		})));
//	}
	updateData(dataList);

};

socket.onclose = (event) => {
	  console.log('WebSocket closed:', event.code, event.reason);
	};
socket.onopen = function() {
    console.dir("WebSocket 연결 성공");
    socket.send("Hello, server!");
};


socket.onmessage = function(event) {
	console.log('첫번째 소켓');
	var dataSet = JSON.parse(event.data);
//	console.log(dataSet[0])
	for(let i=0;i<dataSet.length;i++){
		dataSet[i] = dataSet[i].substring(0, dataSet[i].length - 4) + "시" + dataSet[i].substring(dataSet[i].length - 3,dataSet[i].length-1);
	}
//	console.log(dataSet[0]);
	dataList = [];
	for (let i =0;i<dataSet.length;i++){
		dataList.push(Object.fromEntries(dataSet[i].split(',').map(item => {
			const [key, value] = item.split(':');
			return [key, value];
		})));
	}
	showData(dataList);
	let date = new Date(dataList[0].RECORD_DATE);
	let formatter = new Intl.DateTimeFormat("ko-KR", {
	  year: "numeric",
	  month: "2-digit",
	  day: "2-digit",
	  hour: "2-digit",
	  minute: "2-digit"
	});
	let result = formatter.format(date);
	console.log(result); // "2021년 09월 09일 19시10분"
	for(let i =0; i<$(".tctm").length;i++){
		$(".tctm")[i].innerText = result;
	};
};


socket2.onopen = function() {
	console.dir("WebSocket 2번째 연결 성공");
	socket2.send("Hello, server!");
};

//socket2.onmessage = function(event) {
//
//	var dataSet = JSON.parse(event.data);
////	console.log(dataSet[0])
//	for(let i=0;i<dataSet.length;i++){
//		dataSet[i] = dataSet[i].substring(0, dataSet[i].length - 4) + "H" + dataSet[i].substring(dataSet[i].length - 3,dataSet[i].length-1);
//	}
////	console.log(dataSet[0]);
//	dataList = [];
//	for (let i =0;i<dataSet.length;i++){
//		dataList.push(Object.fromEntries(dataSet[i].split(',').map(item => {
//			const [key, value] = item.split(':');
//			return [key, value];
//		})));
//	}
//	console.log(dataList);
//	updateData();
//};


num = 8; // 수조 개수
let range = 15;

var user = $('#user-id').text();
let tankIdList = [];
for (let i =0; i<num ; i++){
	tankIdList.push($('.tct').html());
}	
let labels = [];


let dataList0 = [];
let dataList1 = [];
let dataList2 = [];
let dataList3 = [];

option_TEMP = {
		  scales: {
		    y: {
		    	min : 0,
		        max : 40,
		        stepSize : 5,
		        ticks: {
				        min: null, // y축 최소값
				        max: null, // y축 최대값
				        stepSize: 5,// y축 간격
				        suggestedMin : 0,
				        suggestedMax : 40
				      }
		    }
		  }
}
option_DO = {
		scales: {
			y: {
				min : 0,
				max : 32,
				stepSize: 3,
				ticks: {
					min: 0, // y축 최소값
					max: 32, // y축 최대값
					stepSize: 3 // y축 간격
				}
			}
		}
}
option_PH = {
		scales: {
			y: {
				min : 0,
				max : 16,
				stepSize : 1,
				ticks: {
					min: 0, // y축 최소값
					max: 16, // y축 최대값
					stepSize: 1 // y축 간격
				}
			}
		}
}
option_SALT = {
		scales: {
			y: {
				min : 0,
				max : 3.6,
				stepSize:0.3,
				ticks: {
					min: 0, // y축 최소값
					max: 3.6, // y축 최대값
					stepSize: 0.3 // y축 간격
				}
			}
		}
}

let dataList = [dataList0, dataList1, dataList2, dataList3]

const chartListONDO = [];
const chartListDO = [];
const chartListPH= [];
const chartListSALT = [];
const chartListSet = [];

for (let i=0;i<num;i++){
	chartListONDO.push(new Chart(document.querySelector(ondoArray[i]).getContext('2d'), {
		type: 'line',
		data : {},//dataList[0][i],
		//options : option_TEMP,
	})); // 차트 객체 생성
	chartListDO.push(new Chart(document.querySelector(doArray[i]).getContext('2d'), {
		type: 'line',
		data : {},//dataList[1][i]
		//options : option_DO
	})); // 차트 객체 생성
	chartListPH.push(new Chart(document.querySelector(phArray[i]).getContext('2d'), {
		type: 'line',
		data : {},//dataList[2][i]
		//options: option_PH
	})); // 차트 객체 생성
	chartListSALT.push(new Chart(document.querySelector(saltArray[i]).getContext('2d'), {
		type: 'line',
		data : {},//dataList[3][i]
		//options : option_SALT
	})); // 차트 객체 생성
}
chartListSet.push(chartListONDO);
chartListSet.push(chartListDO);
chartListSet.push(chartListPH);
chartListSet.push(chartListSALT);


function showData(data){
	console.log("성공");
	console.log(data);
	// 실행 로직
	const ondo_AccListSet = [];
	const ondo_PreListSet = [];
	const do_AccListSet = [];
	const do_PreListSet = [];
	const ph_AccListSet = [];
	const ph_PreListSet = [];
	const salt_AccListSet = [];
	const salt_PreListSet = [];
	const dataListLocal = [];
	let labelsLocal = [];
	for (let i =0;i<range;i++){
		labelsLocal.push(data[i].RECORD_DATE.split('T')[0].substring(8, 10)+"일 "+data[i].RECORD_DATE.split('T')[1]+"분");
	}
	labels = labelsLocal;
    for (i =0; i<num;i++){
    	let ondo_AccList = [];
    	let ondo_PreList = [];
    	let do_AccList = [];
    	let do_PreList = [];
    	let ph_AccList = [];
    	let ph_PreList = [];
    	let salt_AccList = [];
    	let salt_PreList = [];
    	
    	
    	
    	for (j = 0; j < range; j++) {
    		
    		ondo_AccList.push((parseFloat(data[i*range+j].TEMP_ACC)).toFixed(2));
    		ondo_PreList.push((parseFloat(data[i*range+j].TEMP_PRE)).toFixed(2));
    		do_AccList.push((parseFloat(data[i*range+j].DO_ACC)).toFixed(2));
    		do_PreList.push((parseFloat(data[i*range+j].DO_PRE)).toFixed(2));
    		ph_AccList.push((parseFloat(data[i*range+j].PH_ACC)).toFixed(2));
    		ph_PreList.push((parseFloat(data[i*range+j].PH_PRE)).toFixed(2));
    		salt_AccList.push((parseFloat(data[i*range+j].SALT_ACC)).toFixed(2));
    		salt_PreList.push((parseFloat(data[i*range+j].SALT_PRE)).toFixed(2));
    	}
    	ondo_AccListSet.push(ondo_AccList);
    	ondo_PreListSet.push(ondo_PreList);
    	do_AccListSet.push(do_AccList);
    	do_PreListSet.push(do_PreList);
    	ph_AccListSet.push(ph_AccList);
    	ph_PreListSet.push(ph_PreList);
    	salt_AccListSet.push(salt_AccList);
    	salt_PreListSet.push(salt_PreList);
    }
    
    let dataListLocal0 = [];
    let dataListLocal1 = [];
    let dataListLocal2 = [];
    let dataListLocal3 = [];
    for (let i =0; i<num;i++){
    	dataListLocal0.push({
                labels: labels,
                datasets: [{
                    label: '현재 온도',
                    data: ondo_AccListSet[i],
                    borderColor: ['green'],
                    backgroundColor: ['green'],
                    fill: false
                }, {
                    label: '예측 온도',
                    data: ondo_PreListSet[i],
                    borderColor: ['orange'],
                    backgroundColor: ['orange'],
                    fill: false
                }]
            })
        dataListLocal1.push({
            		labels: labels,
            		datasets: [{
            			label: '현재 DO',
            			data: do_AccListSet[i],
            			borderColor: ['green'],
                        backgroundColor: ['green'],
            			fill: false
            		}, {
            			label: '예측 DO',
            			data: do_PreListSet[i],
            			borderColor: ['orange'],
                        backgroundColor: ['orange'],
            			fill: false
            		}]
            })
        dataListLocal2.push({
            		labels: labels,
            		datasets: [{
            			label: '현재 pH',
            			data: ph_AccListSet[i],
            			borderColor: ['green'],
                        backgroundColor: ['green'],
            			fill: false
            		}, {
            			label: '예측 pH',
            			data: ph_PreListSet[i],
            			borderColor: ['orange'],
                        backgroundColor: ['orange'],
            			fill: false
            		}]
            })
        dataListLocal3.push({
            		labels: labels,
            		datasets: [{
            			label: '현재 염도',
            			data: salt_AccListSet[i],
            			borderColor: ['green'],
                        backgroundColor: ['green'],
            			fill: false
            		}, {
            			label: '예측 염도',
            			data: salt_PreListSet[i],
            			borderColor: ['orange'],
                        backgroundColor: ['orange'],
            			fill: false
            		}]
            })
    }
    dataListLocal.push(dataListLocal0);
    dataListLocal.push(dataListLocal1);
    dataListLocal.push(dataListLocal2);
    dataListLocal.push(dataListLocal3);
	for (let i=0;i<num;i++){
		chartListSet[0][i].data = dataListLocal[0][i];
		chartListSet[1][i].data = dataListLocal[1][i];
		chartListSet[2][i].data = dataListLocal[2][i];
		chartListSet[3][i].data = dataListLocal[3][i];
    	}
    for (let i=0;i<num;i++){
    	
    	chartListSet[0][i].update();
    	chartListSet[1][i].update();
    	chartListSet[2][i].update();
    	chartListSet[3][i].update();
    }
    for(let i=0;i<num;i++){
    	let do_acc = `<h5>` + do_AccListSet[i][range-1] + `ppm</h5>`;
    	let ph_acc = `<h5>` + ph_AccListSet[i][range-1] + `ph</h5>`;
 	    let temp_acc = `<h5>` + ondo_AccListSet[i][range-1] + `°C</h5>`;
 	    let salt_acc = `<h5>` + salt_AccListSet[i][range-1] + `psu</h5>`;
 	    let do_pre = `<h5>` + do_PreListSet[i][range-1] + `ppm</h5>`;
 	    let ph_pre = `<h5>` + ph_PreListSet[i][range-1] + `ph</h5>`;
 	    let temp_pre = `<h5>` + ondo_PreListSet[i][range-1] + `°C</h5>`;
 	    let salt_pre = `<h5>` + salt_PreListSet[i][range-1] + `psu</h5>`;
 	    
     	$(ondoAccArray[i]).html(temp_acc);
     	$(doAccArray[i]).html(do_acc);
     	$(phAccArray[i]).html(ph_acc);
     	$(saltAccArray[i]).html(salt_acc);
     	$(ondoPreArray[i]).html(temp_pre);
     	$(doPreArray[i]).html(do_pre);
     	$(phPreArray[i]).html(ph_pre);
     	$(saltPreArray[i]).html(salt_pre);
    }
//    console.log(chartListSet[0][0])
	
}
function updateData(dataList){
	let date = new Date(dataList[0].RECORD_DATE);
	let formatter = new Intl.DateTimeFormat("ko-KR", {
									  year: "numeric",
									  month: "2-digit",
									  day: "2-digit",
									  hour: "2-digit",
									  minute: "2-digit"
									});
	let result = formatter.format(date);
	console.log(result); // "2021년 09월 09일 19시10분"
	for(let i =0; i<$(".tctm").length;i++){
		$(".tctm")[i].innerText = result;
	};
	console.log(chartListSet[0][0].data.labels);
	chartListSet[0][0].data.labels.shift();
	chartListSet[0][0].data.labels.push(dataList[0].RECORD_DATE.split('T')[0].substring(8, 10)+"일 "+dataList[0].RECORD_DATE.split('T')[1].substring(0, 5)+"분");
	for (let i=0;i<num;i++){

		chartListSet[0][i].data.datasets[0].data.shift();
		chartListSet[1][i].data.datasets[0].data.shift();
		chartListSet[2][i].data.datasets[0].data.shift();
		chartListSet[3][i].data.datasets[0].data.shift();
		chartListSet[0][i].data.datasets[1].data.shift();
		chartListSet[1][i].data.datasets[1].data.shift();
		chartListSet[2][i].data.datasets[1].data.shift();
		chartListSet[3][i].data.datasets[1].data.shift();
		
		chartListSet[0][i].data.datasets[0].backgroundColor.shift();
		chartListSet[1][i].data.datasets[0].backgroundColor.shift();
		chartListSet[2][i].data.datasets[0].backgroundColor.shift();
		chartListSet[3][i].data.datasets[0].backgroundColor.shift();
		chartListSet[0][i].data.datasets[1].backgroundColor.shift();
		chartListSet[1][i].data.datasets[1].backgroundColor.shift();
		chartListSet[2][i].data.datasets[1].backgroundColor.shift();
		chartListSet[3][i].data.datasets[1].backgroundColor.shift();
		
		chartListSet[0][i].data.datasets[0].borderColor.shift();
		chartListSet[1][i].data.datasets[0].borderColor.shift();
		chartListSet[2][i].data.datasets[0].borderColor.shift();
		chartListSet[3][i].data.datasets[0].borderColor.shift();
		chartListSet[0][i].data.datasets[1].borderColor.shift();
		chartListSet[1][i].data.datasets[1].borderColor.shift();
		chartListSet[2][i].data.datasets[1].borderColor.shift();
		chartListSet[3][i].data.datasets[1].borderColor.shift();
		
		chartListSet[0][i].data.datasets[0].data.push(dataList[i].TEMP);   /// 플라스크에서 보낸 값으로 채워주기!!
		chartListSet[1][i].data.datasets[0].data.push(dataList[i].DO);
		chartListSet[2][i].data.datasets[0].data.push(dataList[i].PH);
		chartListSet[3][i].data.datasets[0].data.push(dataList[i].SALT);
		chartListSet[0][i].data.datasets[1].data.push(dataList[i].TEMP_PRE);
		chartListSet[1][i].data.datasets[1].data.push(dataList[i].DO_PRE);
		chartListSet[2][i].data.datasets[1].data.push(dataList[i].PH_PRE);
		chartListSet[3][i].data.datasets[1].data.push(dataList[i].SALT_PRE);
		
		chartListSet[0][i].data.datasets[0].backgroundColor.push(dataList[i].TEMP <=3 ? 'red':'green');
		chartListSet[1][i].data.datasets[0].backgroundColor.push(dataList[i].DO <=3 ? 'red':'green');
		chartListSet[2][i].data.datasets[0].backgroundColor.push(dataList[i].PH <=3 ? 'red':'green');
		chartListSet[3][i].data.datasets[0].backgroundColor.push(dataList[i].SALT <=3 ? 'red':'green');
		chartListSet[0][i].data.datasets[1].backgroundColor.push(dataList[i].TEMP_PRE <=3 ? 'red':'orange');
		chartListSet[1][i].data.datasets[1].backgroundColor.push(dataList[i].DO_PRE <=3 ? 'red':'orange');
		chartListSet[2][i].data.datasets[1].backgroundColor.push(dataList[i].PH_PRE <=3 ? 'red':'orange');
		chartListSet[3][i].data.datasets[1].backgroundColor.push(dataList[i].SALT_PRE <=3 ? 'red':'orange');

		chartListSet[0][i].data.datasets[0].borderColor.push(dataList[i].TEMP <=3 ? 'red':'green');
		chartListSet[1][i].data.datasets[0].borderColor.push(dataList[i].DO <=3 ? 'red':'green');
		chartListSet[2][i].data.datasets[0].borderColor.push(dataList[i].PH <=3 ? 'red':'green');
		chartListSet[3][i].data.datasets[0].borderColor.push(dataList[i].SALT <=3 ? 'red':'green');
		chartListSet[0][i].data.datasets[1].borderColor.push(dataList[i].TEMP_PRE <=3 ? 'red':'orange');
		chartListSet[1][i].data.datasets[1].borderColor.push(dataList[i].DO_PRE <=3 ? 'red':'orange');
		chartListSet[2][i].data.datasets[1].borderColor.push(dataList[i].PH_PRE <=3 ? 'red':'orange');
		chartListSet[3][i].data.datasets[1].borderColor.push(dataList[i].SALT_PRE <=3 ? 'red':'orange');
		
		}

	
	for (let i=0;i<num;i++){
		
		chartListSet[0][i].update();
		chartListSet[1][i].update();
		chartListSet[2][i].update();
		chartListSet[3][i].update();
	}
}
