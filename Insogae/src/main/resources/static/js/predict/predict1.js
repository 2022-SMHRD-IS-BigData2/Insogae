var user = $('#user-id').text();
const tankIdList = [];
for (let i =0; i<num ; i++){
	tankIdList.push($('.tct').html());
}
const fix_do_acc_dataset = [];
const fix_ph_acc_dataset = [];
const fix_temp_acc_dataset = [];
const fix_salt_acc_dataset = [];
const fix_do_pre_dataset = [];
const fix_ph_pre_dataset = [];
const fix_temp_pre_dataset = [];
const fix_salt_pre_dataset = [];

for(let i =0;i<num;i++){
      $.ajax({
        url : "tank_data_pre",
        data : {
        	userData :user,
        	tankIdData : tankIdList[i]
        },
        success : function(res) {
    	const labels = [];
    	
    	for(let j =0;j<15;i++){
    		fix_do_acc_dataset.push(res[j].do_ACC.toFixed(2));
            fix_ph_acc_dataset.push(res[j].ph_ACC.toFixed(2));
            fix_temp_acc_dataset.push(res[j].temp_ACC.toFixed(2));
            fix_salt_acc_dataset.push(res[j].salt_ACC.toFixed(2));
            fix_do_pre_dataset.push(res[j].do_PRE.toFixed(2));
            fix_ph_pre_dataset.push(res[j].ph_PRE.toFixed(2));
            fix_temp_pre_dataset.push(res[j].temp_PRE.toFixed(2));
            fix_salt_pre_dataset.push(res[j].salt_PRE.toFixed(2));
            labels.push(res[j].record_DATE.split('T')[1].split('.')[0]);
    	}
    	
    	let data0 = {
	                    labels: labels,
	                    datasets: [{
	                      label: '현재 온도',
	                      data: fix_temp_acc_dataset,
	                      fill: false,
	                      backgroundColor: ['rgb(0, 255, 0)'],
	                      borderColor: ['rgb(0, 255, 0)'],
	                      pointStyle : "none",
	                      pointRadius : 0,
	                      tension: 0.1,
	                      borderWidth: 1
	                    },{
	                 	   label: '예측 온도',
	                        data: fix_temp_pre_dataset,
	                        fill: false,
	                        backgroundColor: ['rgb(255, 153, 0)'],
	                        borderColor: ['rgb(255, 153, 0)'],
	                        pointStyle : "none",
	                        pointRadius : 0,
	                        tension: 0.1,
	                        borderWidth: 1
	                    }]
	                  };


    	let data1 = {
	                    labels: labels,
	                    datasets: [{
	                        label: '현재 DO',
	                        data: fix_do_acc_dataset,
	                        fill: false,
	                        backgroundColor: ['rgb(0, 255, 0)'],
	                        borderColor: ['rgb(0, 255, 0)'],
	                        pointStyle : "none",
	                        pointRadius : 0,	
	                        tension: 0.1,
	                        borderWidth: 1
	                      },{
	                   	   label: '예측 DO',
	                          data: fix_do_pre_dataset,
	                          fill: false,
	                          backgroundColor: ['rgb(255, 153, 0)'],
	                          borderColor: ['rgb(255, 153, 0)'],
	                          pointStyle : "none",
	                          pointRadius : 0,	
	                          tension: 0.1,
	                          borderWidth: 1
	                      }]
	                  };


    	let data2 = {
	                    labels: labels,
	                    datasets: [{
	                        label: '현재 pH',
	                        data: fix_ph_acc_dataset,
	                        fill: false,
	                        backgroundColor: ['rgb(0, 255, 0)'],
	                        borderColor: ['rgb(0, 255, 0)'],
	                        pointStyle : "none",
	                        pointRadius : 0,
	                        tension: 0.1,
	                        borderWidth: 1
	                      },{
	                   	   label: '예측 pH',
	                          data: fix_ph_pre_dataset,
	                          fill: false,
	                          backgroundColor: ['rgb(255, 153, 0)'],
	                          borderColor: ['rgb(255, 153, 0)'],
	                          pointStyle : "none",
	                          pointRadius : 0,
	                          tension: 0.1,
	                          borderWidth: 1
	                      }]
	                  };


    	let data3 = {
	                    labels: labels,
	                    datasets: [{
	                        label: '현재 염도',
	                        data: fix_salt_acc_dataset,
	                        fill: false,
	                        backgroundColor: ['rgb(0, 255, 0)'],
	                        borderColor: ['rgb(0, 255, 0)'],
	                        pointStyle : "none",
	                        pointRadius : 0,
	                        tension: 0.1,
	                        borderWidth: 1
	                      },{
	                   	   label: '예측 염도',
	                          data: fix_salt_pre_dataset,
	                          fill: false,
	                          backgroundColor: ['rgb(255, 153, 0)'],
	                          borderColor: ['rgb(255, 153, 0)'],
	                          pointStyle : "none",
	                          pointRadius : 0,
	                          tension: 0.1,
	                          borderWidth: 1
                      }]
                  };
    	let hiddenLabel = [];
        let config0 = {
          type: 'line',
          data: data0,
          options: {
            scales: {
              x: {
                tick: {
                  display: true,
                  callback: function(label, index, labels) {
                    return hiddenLabel;
                  }
                }
              },
              y:{
                  beginAtZero: false,
                  callback: function(value, index, values) {
                      return value.toFixed(2);
                   
                  },
                  borderDash: [3,3]
              },// y축의 값이 0부터 시작하도록 설정
              animations: {
            	    duration: 0 // 애니메이션 지속 시간
            	  }
            }
          }
        };
        console.log(config0.options.scales.y.callback);
        let config1 = {
          type: 'line',
          data: data1,
          options: {
            scales: {
              x: {
                tick: {
                  display: false,
                  callback: function(label, index, labels) {
                    return hiddenLabel;
                  }
                }
              },
              y:{
                  beginAtZero: false
              }
            }
          }
        };


        let config2 = {
          type: 'line',
          data: data2,
          options: {
            scales: {
              x: {
                tick: {
                  display: false,
                  callback: function(label, index, labels) {
                    return hiddenLabel;
                  }
                }
              },
              y:{
                  beginAtZero: true
              }
            }
          }
        };


        let config3 = {
          type: 'line',
          data: data3,
          options: {
            scales: {
              x: {
                tick: {
                  display: false,
                  callback: function(label, index, labels) {
                    return hiddenLabel;
                  }
                }
              },
              y:{
                  beginAtZero: true
              }
            }
          }
        };
       	 console.log(data0)
       	 console.log(data1)
       	 console.log(data2)
       	 console.log(data3)
        let chart0 = new Chart(
        document.getElementById(ondoArray[i]),
        config0
        );
        console.log(chart0);
        let chart1 = new Chart(
        document.getElementById(doArray[i]),
        config1
        );
        let chart2 = new Chart(
        document.getElementById(phArray[i]),
        config2
        );
        let chart3 = new Chart(
        document.getElementById(saltArray[i]),
        config3
        );
        
        
        console.log(chart0);
        console.log(chart1);
                  
        	
         var count=15;
         	console.log(res);
         	console.log("성공!!");
             setInterval(() => {
               time_data = res[count].record_DATE.split('T')[1].split('.')[0]
               do_acc_data = res[count].do_ACC.toFixed(2);
               ph_acc_data = res[count].ph_ACC.toFixed(2);
               temp_acc_data = res[count].temp_ACC.toFixed(2);
               salt_acc_data = res[count].salt_ACC.toFixed(2);
               do_pre_data = res[count].do_PRE.toFixed(2);
               ph_pre_data = res[count].ph_PRE.toFixed(2);
               temp_pre_data = res[count].temp_PRE.toFixed(2);
               salt_pre_data = res[count].salt_PRE.toFixed(2);
            
               $(ondoAccArray[i]).html("")
               $(doAccArray[i]).html("")
               $(saltAccArray[i]).html("")
               $(phAccArray[i]).html("")
               $(ondoPreArray[i]).html("")
               $(doPreArray[i]).html("")
               $(saltPreArray[i]).html("")
               $(phPreArray[i]).html("")
               
               let do_acc = `<h5>`+do_acc_data+`ppm</h5>`;
               let ph_acc=`<h5>`+ph_acc_data+`ph</h5>`;
               let temp_acc=`<h5>`+temp_acc_data+`°C</h5>`;
               let salt_acc=`<h5>`+salt_acc_data+`psu</h5>`;
               let do_pre = `<h5>`+do_pre_data+`ppm</h5>`;
               let ph_pre=`<h5>`+ph_pre_data+`ph</h5>`;
               let temp_pre=`<h5>`+temp_pre_data+`°C</h5>`;
               let salt_pre=`<h5>`+salt_pre_data+`psu</h5>`;
               $(ondoAccArray[i]).append(temp_acc);
               $(doAccArray[i]).append(do_acc);
               $(saltAccArray[i]).append(salt_acc);
               $(phAccArray[i]).append(ph_acc);
               $(ondoPreArray[i]).append(temp_pre);
               $(doPreArray[i]).append(do_pre);
               $(saltPreArray[i]).append(salt_pre);
               $(phPreArray[i]).append(ph_pre);
               	count++;
           }, 500);




             
         
             setInterval(()=> {
             hiddenLabel.push("");
           
             if (data0.datasets[0].data.length > 100){
             labels.shift();
             data0.datasets[0].data.shift();
             data0.datasets[0].backgroundColor.shift();
             data0.datasets[0].borderColor.shift();
             data0.datasets[1].data.shift();
             data0.datasets[1].backgroundColor.shift();
             data0.datasets[1].borderColor.shift();

             data1.datasets[0].data.shift();
             data1.datasets[0].backgroundColor.shift();
             data1.datasets[0].borderColor.shift();
             data1.datasets[1].data.shift();
             data1.datasets[1].backgroundColor.shift();
             data1.datasets[1].borderColor.shift();

             data2.datasets[0].data.shift();
             data2.datasets[0].backgroundColor.shift();
             data2.datasets[0].borderColor.shift();
             data2.datasets[1].data.shift();
             data2.datasets[1].backgroundColor.shift();
             data2.datasets[1].borderColor.shift();

             data3.datasets[0].data.shift();
             data3.datasets[0].backgroundColor.shift();
             data3.datasets[0].borderColor.shift();
             data3.datasets[1].data.shift();
             data3.datasets[1].backgroundColor.shift();
             data3.datasets[1].borderColor.shift();

             }
             labels.push(time_data);
             console.log(data0);
             data0.datasets[0].data.push(res[count].temp_ACC);
             data0.datasets[0].backgroundColor.push(3 >=res[count].temp_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             data0.datasets[0].borderColor.push(3 >= res[count].temp_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             data0.datasets[1].data.push(res[count].temp_PRE);
             data0.datasets[1].backgroundColor.push(3 >=res[count].temp_PRE ? 'rgba(255, 0, 0)' : 'rgb(255, 153, 0)');
             data0.datasets[1].borderColor.push(3 >= res[count].temp_PRE ? 'rgba(255, 0, 0)' : 'rgb(255, 153, 0)');
            
             data1.datasets[0].data.push(res[count].do_ACC);
             data1.datasets[0].backgroundColor.push(3 >=res[count].do_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             data1.datasets[0].borderColor.push(3 >= res[count].do_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             data1.datasets[1].data.push(res[count].do_PRE);
             data1.datasets[1].backgroundColor.push(3 >=res[count].do_PRE ? 'rgba(255, 0, 0)' : 'rgba(255, 153, 0)');
             data1.datasets[1].borderColor.push(3 >= res[count].do_PRE ? 'rgba(255, 0, 0)' : 'rgba(255, 153, 0)');

             data2.datasets[0].data.push(res[count].ph_ACC);
             data2.datasets[0].backgroundColor.push(3 >=res[count].ph_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             data2.datasets[0].borderColor.push(3 >= res[count].ph_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)'); 
             data2.datasets[1].data.push(res[count].ph_PRE);
             data2.datasets[1].backgroundColor.push(3 >=res[count].ph_PRE ? 'rgba(255, 0, 0)' : 'rgba(255, 153, 0)');
             data2.datasets[1].borderColor.push(3 >= res[count].ph_PRE ? 'rgba(255, 0, 0)' : 'rgba(255, 153, 0)');

             data3.datasets[0].data.push(res[count].salt_ACC);
             data3.datasets[0].backgroundColor.push(3 >=res[count].salt_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             data3.datasets[0].borderColor.push(3 >= res[count].salt_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             data3.datasets[1].data.push(res[count].salt_PRE);
             data3.datasets[1].backgroundColor.push(3 >=res[count].salt_PRE ? 'rgba(255, 0, 0)' : 'rgba(255, 153, 0)');
             data3.datasets[1].borderColor.push(3 >= res[count].salt_PRE ? 'rgba(255, 0, 0)' : 'rgba(255, 153, 0)');
             
             chart0.options.animation.duration = 0;
        	 chart0.update();
        	 chart1.update();
        	 chart2.update();
        	 chart3.update();
        	 
        	 /*console.log(ctx.getContextAttributes());
        	 chart0.data.datasets.forEach(function(dataset, datasetIndex) {
           	  const meta = chart0.getDatasetMeta(datasetIndex);
           	  console.log(meta);
           	  meta.data.forEach(function(point, pointIndex) {
           	    const value = dataset.data[pointIndex];
           	    const x = point.x;
           	    const y = point.y - 10; // 숫자를 위에 그리기 위해 Y값 위치에서 10px 위로 이동
           	    ctx.font = "50px serif";
           	    ctx.fillStyle = "rgba(255, 0, 0)";
           	    ctx.strokeStyle = "rgba(255, 0, 0)";
           	    ctx.fillText(value, x, y);
           	  });
           	});*/
       
             count++;
             }, 500);  
        },
        error : function(){
          console.log('요청실패');
        }
      });
}