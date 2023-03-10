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
      $.ajax({
        url : "tank_data_pre",
        data : {
        	userData :user,
        	tankIdData : tankIdList[0]
        },
        success : function(res) {
    	const labels = [];
    	for(let i =0;i<13;i++){
    		fix_do_acc_dataset.push(res[i].do_ACC.toFixed(2));
            fix_ph_acc_dataset.push(res[i].ph_ACC.toFixed(2));
            fix_temp_acc_dataset.push(res[i].temp_ACC.toFixed(2));
            fix_salt_acc_dataset.push(res[i].salt_ACC.toFixed(2));
            fix_do_pre_dataset.push(res[i].do_PRE.toFixed(2));
            fix_ph_pre_dataset.push(res[i].ph_PRE.toFixed(2));
            fix_temp_pre_dataset.push(res[i].temp_PRE.toFixed(2));
            fix_salt_pre_dataset.push(res[i].salt_PRE.toFixed(2));
            labels.push(res[i].record_DATE.split('T')[1].split('.')[0]);
    	}
    	
    	const data0 = {
	                    labels: labels,
	                    datasets: [{
	                      label: '현재 온도',
	                      data: fix_temp_acc_dataset,
	                      fill: false,
	                      backgroundColor: ['rgb(0, 255, 0)'],
	                      borderColor: ['rgb(0, 255, 0)'],
	                      tension: 0.1,
	                      borderWidth: 1
	                    },{
	                 	   label: '예측 온도',
	                        data: fix_temp_pre_dataset,
	                        fill: false,
	                        backgroundColor: ['rgb(255, 153, 0)'],
	                        borderColor: ['rgb(255, 153, 0)'],
	                        tension: 0.1,
	                        borderWidth: 1
	                    }]
	                  };


    	const data1 = {
	                    labels: labels,
	                    datasets: [{
	                        label: '현재 DO',
	                        data: fix_do_acc_dataset,
	                        fill: false,
	                        backgroundColor: ['rgb(0, 255, 0)'],
	                        borderColor: ['rgb(0, 255, 0)'],
	                        tension: 0.1,
	                        borderWidth: 1
	                      },{
	                   	   label: '예측 DO',
	                          data: fix_do_pre_dataset,
	                          fill: false,
	                          backgroundColor: ['rgb(255, 153, 0)'],
	                          borderColor: ['rgb(255, 153, 0)'],
	                          tension: 0.1,
	                          borderWidth: 1
	                      }]
	                  };


    	const data2 = {
	                    labels: labels,
	                    datasets: [{
	                        label: '현재 pH',
	                        data: fix_ph_acc_dataset,
	                        fill: false,
	                        backgroundColor: ['rgb(0, 255, 0)'],
	                        borderColor: ['rgb(0, 255, 0)'],
	                        tension: 0.1,
	                        borderWidth: 1
	                      },{
	                   	   label: '예측 pH',
	                          data: fix_ph_pre_dataset,
	                          fill: false,
	                          backgroundColor: ['rgb(255, 153, 0)'],
	                          borderColor: ['rgb(255, 153, 0)'],
	                          tension: 0.1,
	                          borderWidth: 1
	                      }]
	                  };


    	const data3 = {
	                    labels: labels,
	                    datasets: [{
	                        label: '현재 염도',
	                        data: fix_salt_acc_dataset,
	                        fill: false,
	                        backgroundColor: ['rgb(0, 255, 0)'],
	                        borderColor: ['rgb(0, 255, 0)'],
	                        tension: 0.1,
	                        borderWidth: 1
	                      },{
	                   	   label: '예측 염도',
	                          data: fix_salt_pre_dataset,
	                          fill: false,
	                          backgroundColor: ['rgb(255, 153, 0)'],
	                          borderColor: ['rgb(255, 153, 0)'],
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
                  beginAtZero: true
              }// y축의 값이 0부터 시작하도록 설정
            }
          }
        };

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
                  beginAtZero: true
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
        document.getElementById('ondo-gp-1'),
        config0
        );
        console.log(chart0);
        let chart1 = new Chart(
        document.getElementById('do-gp-1'),
        config1
        );
        let chart2 = new Chart(
        document.getElementById('ph-gp-1'),
        config2
        );
        let chart3 = new Chart(
        document.getElementById('salt-gp-1'),
        config3
        );
        console.log(chart0);
        console.log(chart1);
                  
        	
         var count=13;
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
            
               $('#ondo-acc-1').html("")
               $('#do-acc-1').html("")
               $('#salt-acc-1').html("")
               $('#ph-acc-1').html("")
               $('#ondo-pre-1').html("")
               $('#do-pre-1').html("")
               $('#salt-pre-1').html("")
               $('#ph-pre-1').html("")
               
               let do_acc = `<h5>`+do_acc_data+`ppm</h5>`;
               let ph_acc=`<h5>`+ph_acc_data+`ph</h5>`;
               let temp_acc=`<h5>`+temp_acc_data+`°C</h5>`;
               let salt_acc=`<h5>`+salt_acc_data+`psu</h5>`;
               let do_pre = `<h5>`+do_pre_data+`ppm</h5>`;
               let ph_pre=`<h5>`+ph_pre_data+`ph</h5>`;
               let temp_pre=`<h5>`+temp_pre_data+`°C</h5>`;
               let salt_pre=`<h5>`+salt_pre_data+`psu</h5>`;
               $('#ondo-acc-1').append(temp_acc);
               $('#do-acc-1').append(do_acc);
               $('#salt-acc-1').append(salt_acc);
               $('#ph-acc-1').append(ph_acc);
               $('#ondo-pre-1').append(temp_pre);
               $('#do-pre-1').append(do_pre);
               $('#salt-pre-1').append(salt_pre);
               $('#ph-pre-1').append(ph_pre);
               	count++;
           }, 3000);




             
         
             setInterval(()=> {
             hiddenLabel.push("");
           
             if (data0.datasets[0].data.length > 12){
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
             
        	 chart0.update();
        	 chart1.update();
        	 chart2.update();
        	 chart3.update();
       
             count++;
             }, 3000);  
        },
        error : function(){
          console.log('요청실패');
        }
      });