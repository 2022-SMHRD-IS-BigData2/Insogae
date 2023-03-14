var user = $('#user-id').text();
const tankIdList = [];
for (let i =0; i<num ; i++){
	tankIdList.push($('.tct').html());
}	
const labels = []


const ondo_AccListSet = [];
const ondo_PreListSet = [];
const do_AccListSet = [];
const do_PreListSet = [];
const ph_AccListSet = [];
const ph_PreListSet = [];
const salt_AccListSet = [];
const salt_PreListSet = [];

$.ajax({
    url : "dataPredict",
    success : function(res) {
    	console.log(res);
    	const labels =[]
    	
    	for (let i =0;i<12;i++){
    		labels.push(res[0].record_DATE.split('T')[1].split('.')[0]);
    	}
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
        
        
        let dataList0 = []
        let dataList1 = []
        let dataList2 = []
        let dataList3 = []
        for (let i =0; i<num;i++){
        	dataList0.push({
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
            dataList1.push({
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
            dataList2.push({
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
            dataList3.push({
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

        let dataList = [dataList0, dataList1, dataList2, dataList3]
        console.log(dataList)
            // 차트 객체가 이미 생성된 경우, 업데이트를 수행합니다.
//                window.myChart.data.datasets[0].data = ondo_AccList[0];
//            	window.myChart.data.datasets[1].data = ondo_PreList[0];
//            	window.myChart.data.labels = labels;
//                window.myChart.update();
            // 차트 객체가 생성되지 않은 경우, 새로운 차트를 생성합니다.
        chartListONDO = []
        chartListDO = []
        chartListPH= []
        chartListSALT = []
        chartListSet = []
        	for (let i=0;i<num;i++){
        		chartListONDO.push(new Chart(document.querySelector(ondoArray[i]).getContext('2d'), {
        			type: 'line',
        			data : dataList[0][i]
        		})); // 차트 객체 생성
        		chartListDO.push(new Chart(document.querySelector(doArray[i]).getContext('2d'), {
        			type: 'line',
        			data : dataList[1][i]
        		})); // 차트 객체 생성
        		chartListPH.push(new Chart(document.querySelector(phArray[i]).getContext('2d'), {
        			type: 'line',
        			data : dataList[2][i]
        		})); // 차트 객체 생성
        		chartListSALT.push(new Chart(document.querySelector(saltArray[i]).getContext('2d'), {
        			type: 'line',
        			data : dataList[3][i]
        		})); // 차트 객체 생성
        }
        chartListSet = [chartListONDO, chartListDO, chartListPH, chartListSALT];
        console.log(ondo_AccListSet)
setInterval(() => {
	const labels =[]
	
	for (let i =0;i<12;i++){
		labels.push(res[0].record_DATE.split('T')[1].split('.')[0]);
	}
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
    
    
    let dataList0 = []
    let dataList1 = []
    let dataList2 = []
    let dataList3 = []
    for (let i =0; i<num;i++){
    	dataList0.push({
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
        dataList1.push({
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
        dataList2.push({
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
        dataList3.push({
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

    for (let i=0;i<num;i++){
		chartListSet[0][i].data.datasets[0].data = ondo_AccListSet[i];
		chartListSet[0][i].data.datasets[1].data = ondo_PreListSet[i];
		chartListSet[1][i].data.datasets[0].data = do_AccListSet[i];
		chartListSet[1][i].data.datasets[1].data = do_PreListSet[i];
		chartListSet[2][i].data.datasets[0].data = ph_AccListSet[i];
		chartListSet[2][i].data.datasets[1].data = ph_PreListSet[i];
		chartListSet[3][i].data.datasets[0].data = salt_AccListSet[i];
		chartListSet[3][i].data.datasets[1].data = salt_PreListSet[i];
    	}
    for (let i=0;i<num;i++){
    	chartListSet[0][i].update();
    	chartListSet[1][i].update();
    	chartListSet[2][i].update();
    	chartListSet[3][i].update();
    }
    	
		}, 5000);
        
    },
    error : function() {
        console.log('요청실패');
    }
});
