var user = $('#user-id').text();
const tankIdList = [];
for (let i =0; i<num ; i++){
	tankIdList.push($('.tct').html());
}
      $.ajax({
        url : "tank_data_pre",
        data : {
        	userData :user,
        	tankIdData : tankIdList[0]
        },
        success : function(res) {
         var count=0;
         	console.log(res);
         	console.log("성공!!");
             setInterval(() => {
               console.log(res[count].temp_ACC)
               console.log(res[count].do_ACC)
               console.log(res[count].ph_ACC)
               console.log(res[count].salt_ACC)
               time_data = res[count].record_DATE.split('T')[1].split('.')[0]
               do_data = res[count].do_ACC.toFixed(2);
               ph_data = res[count].ph_ACC.toFixed(2);
               temp_data = res[count].temp_ACC.toFixed(2);
               salt_data = res[count].salt_ACC.toFixed(2);
            
               $('#ondo-1').html("")
               $('#do-1').html("")
               $('#salt-1').html("")
               $('#ph-1').html("")
               
               let do_do = `<h5>`+do_data+`ppm</h5>`;
               let ph=`<h5>`+ph_data+`ph</h5>`;
               let temp=`<h5>`+temp_data+`°C</h5>`;
               let salt=`<h5>`+salt_data+`psu</h5>`;
               $('#ondo-1').append(temp);
               $('#do-1').append(do_do);
               $('#salt-1').append(salt);
               $('#ph-1').append(ph);
               	count++;
           }, 3000);

let labels = [];
 const data0 = {
               labels: labels,
               datasets: [{
                 label: '현재 온도',
                 data: [],
                 fill: false,
                 backgroundColor: [],
                 borderColor: [],
                 tension: 0.1,
                 borderWidth: 1
               },{
            	   label: '예측 온도',
                   data: [],
                   fill: false,
                   backgroundColor: [],
                   borderColor: [],
                   tension: 0.1,
                   borderWidth: 1
               }]
             };


 const data1 = {
               labels: labels,
               datasets: [{
                   label: '현재 DO',
                   data: [],
                   fill: false,
                   backgroundColor: [],
                   borderColor: [],
                   tension: 0.1,
                   borderWidth: 1
                 },{
              	   label: '예측 DO',
                     data: [],
                     fill: false,
                     backgroundColor: [],
                     borderColor: [],
                     tension: 0.1,
                     borderWidth: 1
                 }]
             };


 const data2 = {
               labels: labels,
               datasets: [{
                   label: '현재 pH',
                   data: [],
                   fill: false,
                   backgroundColor: [],
                   borderColor: [],
                   tension: 0.1,
                   borderWidth: 1
                 },{
              	   label: '예측 pH',
                     data: [],
                     fill: false,
                     backgroundColor: [],
                     borderColor: [],
                     tension: 0.1,
                     borderWidth: 1
                 }]
             };


 const data3 = {
               labels: labels,
               datasets: [{
                   label: '현재 염도',
                   data: [],
                   fill: false,
                   backgroundColor: [],
                   borderColor: [],
                   tension: 0.1,
                   borderWidth: 1
                 },{
              	   label: '예측 염도',
                     data: [],
                     fill: false,
                     backgroundColor: [],
                     borderColor: [],
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
                       display: false,
                       callback: function(label, index, labels) {
                         return hiddenLabel;
                       }
                     }
                   }
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
                   }
                 }
               }
             };
            	 
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
             data0.datasets[0].data.push(res[count].temp_ACC);
             data0.datasets[0].backgroundColor.push(3 >=res[count].temp_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             data0.datasets[0].borderColor.push(3 >= res[count].temp_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             data0.datasets[1].data.push(res[count].temp_PRE);
             data0.datasets[1].backgroundColor.push(3 >=res[count].temp_PRE ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             data0.datasets[1].borderColor.push(3 >= res[count].temp_PRE ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
            
             data1.datasets[0].data.push(res[count].do_ACC);
             data1.datasets[0].backgroundColor.push(3 >=res[count].do_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             data1.datasets[0].borderColor.push(3 >= res[count].do_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             data1.datasets[1].data.push(res[count].do_PRE);
             data1.datasets[1].backgroundColor.push(3 >=res[count].do_PRE ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             data1.datasets[1].borderColor.push(3 >= res[count].do_PRE ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');

             data2.datasets[0].data.push(res[count].ph_ACC);
             data2.datasets[0].backgroundColor.push(3 >=res[count].ph_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             data2.datasets[0].borderColor.push(3 >= res[count].ph_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)'); 
             data2.datasets[1].data.push(res[count].ph_PRE);
             data2.datasets[1].backgroundColor.push(3 >=res[count].ph_PRE ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             data2.datasets[1].borderColor.push(3 >= res[count].ph_PRE ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');

             data3.datasets[0].data.push(res[count].salt_ACC);
             data3.datasets[0].backgroundColor.push(3 >=res[count].salt_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             data3.datasets[0].borderColor.push(3 >= res[count].salt_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             data3.datasets[1].data.push(res[count].salt_PRE);
             data3.datasets[1].backgroundColor.push(3 >=res[count].salt_PRE ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             data3.datasets[1].borderColor.push(3 >= res[count].salt_PRE ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             
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