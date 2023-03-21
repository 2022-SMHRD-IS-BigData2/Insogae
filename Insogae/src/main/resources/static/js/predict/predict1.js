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


//setInterval(() => {
	const ondo_AccListSet = [];
	const ondo_PreListSet = [];
	const do_AccListSet = [];
	const do_PreListSet = [];
	const ph_AccListSet = [];
	const ph_PreListSet = [];
	const salt_AccListSet = [];
	const salt_PreListSet = [];
	const dataListLocal = [];
	const date1 = new Date();
	let dd_gp = date1.getDate();
	let hh_gp = date1.getHours();
	let mm_gp = date1.getMinutes();
	$.ajax({
	    url : "dataPredict",
	    success : function(res) {
	    	console.log(res);
	    	let labelsLocal = [];
	    	for (let i =range;i>0;i--){
	    		labelsLocal.push(dd_gp+"일"+hh_gp+"시"+mm_gp+"분");
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
	        		ondo_AccList.push(res[i*range+j].temp_ACC.toFixed(2));
	        		ondo_PreList.push(res[i*range+j].temp_PRE.toFixed(2));
	        		do_AccList.push(res[i*range+j].do_ACC.toFixed(2));
	        		do_PreList.push(res[i*range+j].do_PRE.toFixed(2));
	        		ph_AccList.push(res[i*range+j].ph_ACC.toFixed(2));
	        		ph_PreList.push(res[i*range+j].ph_PRE.toFixed(2));
	        		salt_AccList.push(res[i*range+j].salt_ACC.toFixed(2));
	        		salt_PreList.push(res[i*range+j].salt_PRE.toFixed(2));
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
	     	    let salt_acc = `<h5>` +salt_AccListSet[i][range-1] + `psu</h5>`;
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
	        console.log(chartListSet[0][0])
	        console.log(salt_AccListSet[0])
	    },
	    error : function() {
	        console.log('요청실패');
	    }
	});

//}, 10000);
