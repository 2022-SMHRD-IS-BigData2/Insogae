
      $.ajax({
        url : "tank2data",
        success : function(res) {
         var count=0;
         	console.log(res)
             setInterval(() => {
               console.log(res[count].temp)
               console.log(res[count].do)
               console.log(res[count].ph)
               console.log(res[count].salt)
               time_data = res[count].record_DATE.split('T')[1].split('.')[0]
               do_data = res[count].do.toFixed(2);
               ph_data = res[count].ph.toFixed(2);
               temp_data = res[count].temp.toFixed(2);
               salt_data = res[count].salt.toFixed(2);
            
               $('#ondo-2').html("");
               $('#do-2').html("");
               $('#salt-2').html("");
               $('#ph-2').html("");
               
               let do_do = `<h5>`+do_data+`ppm</h5>`;
               let ph=`<h5>`+ph_data+`ph</h5>`;
               let temp=`<h5>`+temp_data+`°C</h5>`;
               let salt=`<h5>`+salt_data+`psu</h5>`;
               $('#ondo-2').append(temp);
               $('#do-2').append(do_do);
               $('#salt-2').append(salt);
               $('#ph-2').append(ph);
               	count++;
           }, 3000);

let labels = [];
             const data0 = {
               labels: labels,
               datasets: [{
                 label: '온도',
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
                 label: 'DO',
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
                 label: 'pH',
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
                 label: '염분',
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
             document.getElementById('ondo-gp-2'),
             config0
             );
             let chart1 = new Chart(
             document.getElementById('do-gp-2'),
             config1
             );
             let chart2 = new Chart(
             document.getElementById('ph-gp-2'),
             config2
             );
             let chart3 = new Chart(
             document.getElementById('salt-gp-2'),
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

             data1.datasets[0].data.shift();
             data1.datasets[0].backgroundColor.shift();
             data1.datasets[0].borderColor.shift();

             data2.datasets[0].data.shift();
             data2.datasets[0].backgroundColor.shift();
             data2.datasets[0].borderColor.shift();

             data3.datasets[0].data.shift();
             data3.datasets[0].backgroundColor.shift();
             data3.datasets[0].borderColor.shift();

             }
             labels.push(time_data);
             data0.datasets[0].data.push(res[count].temp);
             data0.datasets[0].backgroundColor.push(3 >=res[count].temp ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             data0.datasets[0].borderColor.push(3 >= res[count].temp ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
            
             data1.datasets[0].data.push(res[count].do);
             data1.datasets[0].backgroundColor.push(3 >=res[count].do ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             data1.datasets[0].borderColor.push(3 >= res[count].do ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');

             data2.datasets[0].data.push(res[count].ph);
             data2.datasets[0].backgroundColor.push(3 >=res[count].ph ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             data2.datasets[0].borderColor.push(3 >= res[count].ph ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');   

             data3.datasets[0].data.push(res[count].salt);
             data3.datasets[0].backgroundColor.push(3 >=res[count].salt ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             data3.datasets[0].borderColor.push(3 >= res[count].salt ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
             
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