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
//for (let i =0; i<num;i++){
//	dataList0.push({
//            labels: labels,
//            datasets: [{
//                label: '현재 온도',
//                data: [],
//                borderColor: 'green',
//                backgroundColor: 'green',
//                fill: false
//            }, {
//                label: '예측 온도',
//                data: [],
//                borderColor: 'orange',
//                backgroundColor: 'orange',
//                fill: false
//            }]
//        })
//    dataList1.push({
//        		labels: labels,
//        		datasets: [{
//        			label: '현재 DO',
//        			data: [],
//        			borderColor: 'green',
//                    backgroundColor: 'green',
//        			fill: false
//        		}, {
//        			label: '예측 DO',
//        			data: [],
//        			borderColor: 'orange',
//                    backgroundColor: 'orange',
//        			fill: false
//        		}]
//        })
//    dataList2.push({
//        		labels: labels,
//        		datasets: [{
//        			label: '현재 pH',
//        			data: [],
//        			borderColor: 'green',
//                    backgroundColor: 'green',
//        			fill: false
//        		}, {
//        			label: '예측 pH',
//        			data: [],
//        			borderColor: 'orange',
//                    backgroundColor: 'orange',
//        			fill: false
//        		}]
//        })
//    dataList3.push({
//        		labels: labels,
//        		datasets: [{
//        			label: '현재 염도',
//        			data: [],
//        			borderColor: 'green',
//                    backgroundColor: 'green',
//        			fill: false
//        		}, {
//        			label: '예측 염도',
//        			data: [],
//        			borderColor: 'orange',
//                    backgroundColor: 'orange',
//        			fill: false
//        		}]
//        })
//}

let dataList = [dataList0, dataList1, dataList2, dataList3]

const chartListONDO = [];
const chartListDO = [];
const chartListPH= [];
const chartListSALT = [];
const chartListSet = [];

for (let i=0;i<num;i++){
	chartListONDO.push(new Chart(document.querySelector(ondoArray[i]).getContext('2d'), {
		type: 'line',
		data : {}//dataList[0][i]
	})); // 차트 객체 생성
	chartListDO.push(new Chart(document.querySelector(doArray[i]).getContext('2d'), {
		type: 'line',
		data : {}//dataList[1][i]
	})); // 차트 객체 생성
	chartListPH.push(new Chart(document.querySelector(phArray[i]).getContext('2d'), {
		type: 'line',
		data : {}//dataList[2][i]
	})); // 차트 객체 생성
	chartListSALT.push(new Chart(document.querySelector(saltArray[i]).getContext('2d'), {
		type: 'line',
		data : {}//dataList[3][i]
	})); // 차트 객체 생성
}
chartListSet.push(chartListONDO);
chartListSet.push(chartListDO);
chartListSet.push(chartListPH);
chartListSet.push(chartListSALT);


setInterval(() => {
	const ondo_AccListSet = [];
	const ondo_PreListSet = [];
	const do_AccListSet = [];
	const do_PreListSet = [];
	const ph_AccListSet = [];
	const ph_PreListSet = [];
	const salt_AccListSet = [];
	const salt_PreListSet = [];
	const dataListLocal = [];
	$.ajax({
	    url : "dataPredict",
	    success : function(res) {
	    	console.log(res);
	    	let labelsLocal = [];
	    	for (let i =0;i<12;i++){
	    		labelsLocal.push(res[0].record_DATE.split('T')[1].split('.')[0]);
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
	        	
	        	
	        	
	        	for (j = 0; j < 12; j++) {
	        		ondo_AccList.push(res[i*12+j].temp_ACC);
	        		ondo_PreList.push(res[i*12+j].temp_PRE);
	        		do_AccList.push(res[i*12+j].do_ACC);
	        		do_PreList.push(res[i*12+j].do_PRE);
	        		ph_AccList.push(res[i*12+j].ph_ACC);
	        		ph_PreList.push(res[i*12+j].ph_PRE);
	        		salt_AccList.push(res[i*12+j].salt_ACC);
	        		salt_PreList.push(res[i*12+j].salt_PRE);
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
	        console.log(ondo_AccListSet)
	        
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
	                        borderColor: 'green',
	                        backgroundColor: 'green',
	                        fill: false
	                    }, {
	                        label: '예측 온도',
	                        data: ondo_PreListSet[i],
	                        borderColor: 'orange',
	                        backgroundColor: 'orange',
	                        fill: false
	                    }]
	                })
	            dataListLocal1.push({
	                		labels: labels,
	                		datasets: [{
	                			label: '현재 DO',
	                			data: do_AccListSet[i],
	                			borderColor: 'green',
	                            backgroundColor: 'green',
	                			fill: false
	                		}, {
	                			label: '예측 DO',
	                			data: do_PreListSet[i],
	                			borderColor: 'orange',
	                            backgroundColor: 'orange',
	                			fill: false
	                		}]
	                })
	            dataListLocal2.push({
	                		labels: labels,
	                		datasets: [{
	                			label: '현재 pH',
	                			data: ph_AccListSet[i],
	                			borderColor: 'green',
	                            backgroundColor: 'green',
	                			fill: false
	                		}, {
	                			label: '예측 pH',
	                			data: ph_PreListSet[i],
	                			borderColor: 'orange',
	                            backgroundColor: 'orange',
	                			fill: false
	                		}]
	                })
	            dataListLocal3.push({
	                		labels: labels,
	                		datasets: [{
	                			label: '현재 염도',
	                			data: salt_AccListSet[i],
	                			borderColor: 'green',
	                            backgroundColor: 'green',
	                			fill: false
	                		}, {
	                			label: '예측 염도',
	                			data: salt_PreListSet[i],
	                			borderColor: 'orange',
	                            backgroundColor: 'orange',
	                			fill: false
	                		}]
	                })
	        }
	        dataListLocal.push(dataListLocal0);
	        dataListLocal.push(dataListLocal1);
	        dataListLocal.push(dataListLocal2);
	        dataListLocal.push(dataListLocal3);
	    	console.log(dataListLocal);
	    	for (let i=0;i<num;i++){
	    		chartListSet[0][i].data = dataListLocal[0][i];
	    		chartListSet[1][i].data = dataListLocal[1][i];
	    		chartListSet[2][i].data = dataListLocal[2][i];
	    		chartListSet[3][i].data = dataListLocal[3][i];
	        	}
	        for (let i=0;i<num;i++){
	        	chartListSet[0][i].update({
	        		  duration: 800,  // 애니메이션 지속 시간 (밀리초)
	        		  easing: 'easeOutBounce',  // 애니메이션 이징 함수
	        		  from: 1  // 애니메이션 시작 지점 (0: 차트 하단)
	        		});
	        	chartListSet[1][i].update({
	        		  duration: 8,  // 애니메이션 지속 시간 (밀리초)
	        		  easing: 'easeOutBounce',  // 애니메이션 이징 함수
	        		  from: 0  // 애니메이션 시작 지점 (0: 차트 하단)
	        		});
	        	chartListSet[2][i].update({
	        		  duration: 800,  // 애니메이션 지속 시간 (밀리초)
	        		  easing: 'easeOutBounce',  // 애니메이션 이징 함수
	        		  from: 0  // 애니메이션 시작 지점 (0: 차트 하단)
	        		});
	        	chartListSet[3][i].update({
	        		  duration: 800,  // 애니메이션 지속 시간 (밀리초)
	        		  easing: 'easeOutBounce',  // 애니메이션 이징 함수
	        		  from: 0  // 애니메이션 시작 지점 (0: 차트 하단)
	        		});
	        }
	        console.log(chartListSet[1][1]);
	        console.log(dataListLocal[0][1]);
	    },
	    error : function() {
	        console.log('요청실패');
	    }
	});

}, 5000);
