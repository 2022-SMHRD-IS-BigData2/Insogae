var socket1 = new WebSocket("ws://localhost:8882/socket1");  // 첫 화면 그래프 출력을 위한 소켓
var socket2 = new WebSocket("ws://localhost:8882/socket2"); // 최종 로직을 짜기 전 단계 ( 파이썬 <-> DB <-> 웹서버 <-> 클라이언트
var socketPy = new WebSocket("ws://localhost:8123/socketPy");  // 최종 로직 ( 파이썬 <-> DB , 파이썬 웹소켓서버 -> 클라이언트)

socket1.onclose = (event) => {
	  console.log('WebSocket closed:', event.code, event.reason);
	};
	
socket1.onopen = function() {
  console.dir("스프링서버: WebSocketHandler1");
  socket1.send("스프링서버 연결!!, 클라이언트 :predictDataHandling.js");
};

socketPy.onopen = function(event) {
	console.dir("WebSocket 연결 성공");
	socketPy.send("파이썬서버 연결!! 클라이언트: predictDataHandling.js");
	console.log(event);
};

socket1.onmessage = function(event) {
	var dataSet = JSON.parse(event.data);
	// 날짜 가공 
	for(let i=0;i<dataSet.length;i++){
		dataSet[i] = dataSet[i].substring(0, dataSet[i].length - 4) + "시" + dataSet[i].substring(dataSet[i].length - 3,dataSet[i].length-1);
	}
	// DB에서 가져온 데이터 딕셔너리형태{} 로 변환
	dataList = [];
	for (let i =0;i<dataSet.length;i++){
		dataList.push(Object.fromEntries(dataSet[i].split(',').map(item => {
			const [key, value] = item.split(':');
			return [key, value];
		})));
	}
	// 초기 그래프에 나타날 데이터 보여주는 함수 
	showData(dataList);
	
	// 그래프 오른쪽 위 날짜 보여주기
	console.log(dataList);
	for(let i =0; i<$(".tctm").length;i++){
		$(".tctm")[i].innerText = dataList[14].RECORD_DATE.split('T')[0] + " "+dataList[14].RECORD_DATE.split('T')[1]+"분";
	};
};

//로컬 스토리지에서 값 가져오기
const isAlarmEnabled = JSON.parse(localStorage.getItem('isChecked'));

socketPy.onmessage = function(event) {
	// 파이썬 웹서버로부터 갱신되는 데이터를 받아서 처리
	// Json객체로 변환
	var dataList = JSON.parse(event.data);
	  if (dataList.type === 'insertData') {
		  updateData(dataList.value);
		  } else if (dataList.type === 'dangerData'){
			  console.log("이상치 !! : "+ dataList.value);
			  if (isAlarmEnabled) {
				  warningToast(dataList.value);
				}
		  } else if (dataList.type === 'predictData'){
			  console.log("예측값!! : " + dataList.value);
			  var jsonArray = JSON.parse(dataList.value);
			  predict6hAfter(jsonArray);
		  }
};


// num = 8; // 수조 개수 -> predict.js 에 이미 선언되어있음
let range = 50; // 그래프 x축 범위 설정

// 수조별 이름을 담을 배열 
let tankIdList = [];
for (let i =0; i<num ; i++){
	tankIdList.push($('.tct').html());
}	

// labels -> x축 값들을 저장할 배열
let labels = [];

let dataList0 = [];
let dataList1 = [];
let dataList2 = [];
let dataList3 = [];

// 각 차트별 옵션 설정
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

// 수조별 초기 차트 각각 양식에 맞춰 설정 ( 수조개수 * 측정치 개수 )
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

// 차트들을 배열에 담기
// chartListSet -> [온도차트리스트(8개수조), ... ,염도차트리스트(8개수조)]
chartListSet.push(chartListONDO);
chartListSet.push(chartListDO);
chartListSet.push(chartListPH);
chartListSet.push(chartListSALT);

// 스프링웹소켓 서버 (DB)로부터 데이터 받아서 실행시키는 로직
function showData(data){
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
	// 날짜 초기값 담기
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
    	
    	// 범위별로 각각의 차트에 들어갈 데이터들을 배열에 담기
    	// i -> 수조별, j -> 범위별
    	// ex ) ondo_AccList -> 각 수조별 데이터 범위를 배열에 담음
    	for (j = 0; j < range; j++) {
    		ondo_AccList.push((parseFloat(data[i*range+j].TEMP_ACC)).toFixed(2));
    		ondo_PreList.push((parseFloat(data[i*range+j].TEMP_PRE)).toFixed(2));
    		do_AccList.push((parseFloat(data[i*range+j].DO_ACC)).toFixed(2));
    		do_PreList.push((parseFloat(data[i*range+j].DO_PRE)).toFixed(2));
    		ph_AccList.push((parseFloat(data[i*range+j].PH_ACC)).toFixed(2));
    		ph_PreList.push((parseFloat(data[i*range+j].PH_PRE)).toFixed(2));

    		salt_AccList.push((parseFloat(data[i*range+j].SALT_ACC*100)).toFixed(2));
    		salt_PreList.push((parseFloat(data[i*range+j].SALT_PRE*100)).toFixed(2));

    	}
    	// j가 한번씩 실행될때마다 새로운 배열에 다시 담기
    	// ex ) ondo_AccListSet = [WT11수조의 15개 행,.. , WT31수조의 15개 행]
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
    
    // 수조별 데이터 차트에 담기위한 딕셔너리 생성
    for (let i =0; i<num;i++){
    	dataListLocal0.push({
                labels: labels,
                datasets: [{
                    label: '현재 온도',
                    data: ondo_AccListSet[i],
                    borderColor: ['green'],
                    backgroundColor: ['green'],
                    pointRadius: 0,
                    fill: false
                }, {
                    label: '예측 온도',
                    data: ondo_PreListSet[i],
                    borderColor: ['orange'],
                    backgroundColor: ['orange'],
                    pointRadius: 0,
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
                        pointRadius: 0,
            			fill: false
            		}, {
            			label: '예측 DO',
            			data: do_PreListSet[i],
            			borderColor: ['orange'],
                        backgroundColor: ['orange'],
                        pointRadius: 0,
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
                        pointRadius: 0,
            			fill: false
            		}, {
            			label: '예측 pH',
            			data: ph_PreListSet[i],
            			borderColor: ['orange'],
                        backgroundColor: ['orange'],
                        pointRadius: 0,
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
                        pointRadius: 0,
            			fill: false
            		}, {
            			label: '예측 염도',
            			data: salt_PreListSet[i],
            			borderColor: ['orange'],
                        backgroundColor: ['orange'],
                        pointRadius: 0,
            			fill: false
            		}]
            })
    }
    
    // 수조별 측정값들의 배열을 더 상위 배열에 다시 담음
    // ex dataListLocal = [[WT11의 온도데이터,..,WT31의 온도데이터],
    // 					   [.. ],
    // 					   [.. ], 
    // 					   [WT11의 염도데이터,..,WT31의 염도데이터]]
    dataListLocal.push(dataListLocal0);
    dataListLocal.push(dataListLocal1);
    dataListLocal.push(dataListLocal2);
    dataListLocal.push(dataListLocal3);
    
    // 각 차트에 각각 매칭이 되는 데이터를 담기
    // chartListSet[0][0] : 첫번째 [0] 온도, 두번째 [0] 수조WT11
    // dataListLocal[0][0] : 첫번째 [0] 온도, 두번째 [0] 수조WT11의 데이터셋
	for (let i=0;i<num;i++){
		chartListSet[0][i].data = dataListLocal[0][i];
		chartListSet[1][i].data = dataListLocal[1][i];
		chartListSet[2][i].data = dataListLocal[2][i];
		chartListSet[3][i].data = dataListLocal[3][i];
    	}
	
	// 데이터를 차트에 담았으면 update()함수 실행!
    for (let i=0;i<num;i++){
    	chartListSet[0][i].update();
    	chartListSet[1][i].update();
    	chartListSet[2][i].update();
    	chartListSet[3][i].update();
    }
    
    // 가장 마지막에 기록된 데이터들을 변수에 담기
    for(let i=0;i<num;i++){
    	let do_acc = `<h5>` + do_AccListSet[i][range-1] + `ppm</h5>`;
    	let ph_acc = `<h5>` + ph_AccListSet[i][range-1] + `ph</h5>`;
 	    let temp_acc = `<h5>` + ondo_AccListSet[i][range-1] + `°C</h5>`;
 	    let salt_acc = `<h5>` + salt_AccListSet[i][range-1] + `psu</h5>`;
 	    let do_pre = `<h5>` + do_PreListSet[i][range-1] + `ppm</h5>`;
 	    let ph_pre = `<h5>` + ph_PreListSet[i][range-1] + `ph</h5>`;
 	    let temp_pre = `<h5>` + ondo_PreListSet[i][range-1] + `°C</h5>`;
 	    let salt_pre = `<h5>` + salt_PreListSet[i][range-1] + `psu</h5>`;
 	    
 	    // 변수에 담은 데이터들을 뷰에 동적 표현
     	$(ondoAccArray[i]).html(temp_acc);
     	$(doAccArray[i]).html(do_acc);
     	$(phAccArray[i]).html(ph_acc);
     	$(saltAccArray[i]).html(salt_acc);
     	$(ondoPreArray[i]).html(temp_pre);
     	$(doPreArray[i]).html(do_pre);
     	$(phPreArray[i]).html(ph_pre);
     	$(saltPreArray[i]).html(salt_pre);
    }
	
}

// 파이썬 웹소켓 서버로부터 데이터 받을때
// 실행되는 함수 
// 마지막 값이 추가 ( push(마지막 값) ) 
// 리스트의 맨 앞쪽의 값 삭제 ( shift() ) 
function updateData(dataList){
	
	// 날짜 데이터 가공 및 표현 차트 오른쪽 위
	let date = new Date(dataList[0].RECORD_DATE);
	let formatter = new Intl.DateTimeFormat("ko-KR", {
									  year: "numeric",
									  month: "2-digit",
									  day: "2-digit",
									  hour: "2-digit",
									  minute: "2-digit"
									});
	let result = formatter.format(date);
	for(let i =0; i<$(".tctm").length;i++){
		$(".tctm")[i].innerText = result;
	};
	
	// x축 데이터(날짜) 업데이트 
	chartListSet[0][0].data.labels.shift();
	chartListSet[0][0].data.labels.push(dataList[0].RECORD_DATE.split('T')[0].substring(8, 10)+"일 "+dataList[0].RECORD_DATE.split('T')[1].substring(0, 5)+"분");
	
	// 파이썬 웹소켓 서버로부터 받은 데이터를 사용
	// 각 수조별 차트에 그 데이터 업데이트
	// shift : 배열의 맨 앞쪽 없애기
	// push : 마지막 값을 추가하여 저장
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
    for(let i=0;i<num;i++){
    	let do_acc = `<h5>`   + parseFloat(dataList[i].DO).toFixed(2)  + `ppm</h5>`;
    	let ph_acc = `<h5>`   + parseFloat(dataList[i].PH).toFixed(2)  + `ph</h5>`;
 	    let temp_acc = `<h5>` + parseFloat(dataList[i].TEMP).toFixed(2)   + `°C</h5>`;


 	    let salt_acc = `<h5>` + parseFloat(dataList[i].SALT*100).toFixed(2)  + `psu</h5>`;

 	    let do_pre = `<h5>`   + parseFloat(dataList[i].DO_PRE).toFixed(2) + `ppm</h5>`;
 	    let ph_pre = `<h5>`   + parseFloat(dataList[i].PH_PRE).toFixed(2)  + `ph</h5>`;
 	    let temp_pre = `<h5>` + parseFloat(dataList[i].TEMP_PRE).toFixed(2)  + `°C</h5>`;


 	    let salt_pre = `<h5>` + parseFloat(dataList[i].SALT_PRE*100).toFixed(2)+ `psu</h5>`;

 	    
 	    // 변수에 담은 데이터들을 뷰에 동적 표현
     	$(ondoAccArray[i]).html(temp_acc);
     	$(doAccArray[i]).html(do_acc);
     	$(phAccArray[i]).html(ph_acc);
     	$(saltAccArray[i]).html(salt_acc);
     	$(ondoPreArray[i]).html(temp_pre);
     	$(doPreArray[i]).html(do_pre);
     	$(phPreArray[i]).html(ph_pre);
     	$(saltPreArray[i]).html(salt_pre);
    }
	
}

// 6시간후 예측값 보여주기
pre6hTEMPList = [];
pre6hDOList = [];
pre6hPHList = [];
pre6hSALTList = [];
for (let i =1;i<=num;i++){
	pre6hTEMPList.push('#pre6h-ondo-'+i);
	pre6hDOList.push('#pre6h-do-'+i);
	pre6hPHList.push('#pre6h-ph-'+i);
	pre6hSALTList.push('#pre6h-salt-'+i);
}
function predict6hAfter(data){
	console.log(data[0]);
	
	var dangerTEMP = "";
	var dangerDO= "";
	var dangerPH = "";
	var dangerSALT = "";
	var dangerTEXT = " (이상치)";
	for (let i =0;i<num;i++){
		data[i].TEMP = parseFloat(data[i].TEMP).toFixed(2);
		data[i].DO = parseFloat(data[i].DO).toFixed(2);
		data[i].PH = parseFloat(data[i].PH).toFixed(2);


		data[i].SALT = parseFloat(data[i].SALT*100).toFixed(2);

		if(data[i].TEMP<23 || data[i].TEMP>32){
			 dangerTEMP = dangerTEXT;
		}
		if(data[i].DO<4 || data[i].DO>9){
			 dangerDO = dangerTEXT;
		}
		if(data[i].PH<5.5 || data[i].PH>8.5){
			dangerPH = dangerTEXT;
		}
		if(data[i].SALT<0.05 || data[i].SALT>5.34){
			dangerSALT = dangerTEXT;
		}
		 
		$(pre6hTEMPList[i]).html("- 온도 : "+data[i].TEMP + dangerTEMP);
		$(pre6hDOList[i]).html("- DO : "+data[i].DO + dangerDO);
		$(pre6hPHList[i]).html("- pH : "+data[i].PH + dangerPH);
		$(pre6hSALTList[i]).html("- 염도 : "+data[i].SALT + dangerSALT);
	}
}