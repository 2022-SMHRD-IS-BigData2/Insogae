$.ajax({
        url : "dataPredict",
        success : function(res) {
         	console.log(res)
//             setInterval(() => {
//            	 for (let i; i<12; i++){
//                     time_data = res[i].record_DATE.split('T')[1].split('.')[0]
//                     do_data = res[i].do_ACC.toFixed(2);
//                     ph_data = res[i].ph_ACC.toFixed(2);
//                     temp_data = res[i].temp_ACC.toFixed(2);
//                     salt_data = res[i].salt_ACC.toFixed(2);
//                  
//                     let do_do = `<h5>`+do_data+`ppm</h5>`;
//                     let ph=`<h5>`+ph_data+`ph</h5>`;
//                     let temp=`<h5>`+temp_data+`°C</h5>`;
//                     let salt=`<h5>`+salt_data+`psu</h5>`;
//                     $('#ondo-2').html(temp);
//                     $('#do-2').html(do_do);
//                     $('#salt-2').html(salt);
//                     $('#ph-2').html(ph);
//            	 }
//            	 count++;
//             }, 3000);
function lineChartView(){
	let labels = [];
//	console.log(res[0].record_DATE.split('T')[1].split('.')[0]);
	for (let i=0; i<12; i++){
        time_data = res[i].record_DATE.split('T')[1].split('.')[0]
        do_data = res[i].do_ACC.toFixed(2);
        ph_data = res[i].ph_ACC.toFixed(2);
        temp_data = res[i].temp_ACC.toFixed(2);
        salt_data = res[i].salt_ACC.toFixed(2);
     
        let do_do = `<h5>`+do_data+`ppm</h5>`;
        let ph=`<h5>`+ph_data+`ph</h5>`;
        let temp=`<h5>`+temp_data+`°C</h5>`;
        let salt=`<h5>`+salt_data+`psu</h5>`;
        $('#ondo-2').html(temp);
        $('#do-2').html(do_do);
        $('#salt-2').html(salt);
        $('#ph-2').html(ph);
        console.log(time_data);
        labels.push(time_data);
	}
	console.log(labels);
    const data0 = {
      labels: labels,
      datasets: [{
        label: '현재 온도',
        data: [],
        fill: false,
        /*backgroundColor: ['green'],
        borderColor: ['green'],*/
        tension: 0.1,
        borderWidth: 1
      }/*,{
          label: '예측 온도',
          data: [],
          fill: false,
          backgroundColor: ['orange'],
          borderColor: ['orange'],
          tension: 0.1,
          borderWidth: 1
        }*/]
    };
    const data1 = {
   		 labels: labels,
   		 datasets: [{
   			 label: '현재 온도',
   			 data: [],
   			 fill: false,
   			 backgroundColor: ['green'],
   			 borderColor: ['green'],
   			 tension: 0.1,
   			 borderWidth: 1
   		 },{
   			 label: '예측 온도',
   			 data: [],
   			 fill: false,
   			 backgroundColor: ['orange'],
   			 borderColor: ['orange'],
   			 tension: 0.1,
   			 borderWidth: 1
   		 }]
    };
    const data2 = {
   		 labels: labels,
   		 datasets: [{
   			 label: '현재 온도',
   			 data: [],
   			 fill: false,
   			 backgroundColor: ['green'],
   			 borderColor: ['green'],
   			 tension: 0.1,
   			 borderWidth: 1
   		 },{
   			 label: '예측 온도',
   			 data: [],
   			 fill: false,
   			 backgroundColor: ['orange'],
   			 borderColor: ['orange'],
   			 tension: 0.1,
   			 borderWidth: 1
   		 }]
    };
    const data3 = {
   		 labels: labels,
   		 datasets: [{
   			 label: '현재 온도',
   			 data: [],
   			 fill: false,
   			 backgroundColor: ['green'],
   			 borderColor: ['green'],
   			 tension: 0.1,
   			 borderWidth: 1
   		 },{
   			 label: '예측 온도',
   			 data: [],
   			 fill: false,
   			 backgroundColor: ['orange'],
   			 borderColor: ['orange'],
   			 tension: 0.1,
   			 borderWidth: 1
   		 }]
    };
    let hiddenLabel =[]
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
    for(let i =1;i<=num;i++){
   	 chart0 = new Chart(
   			 document.querySelector('#ondo-gp-'+i).getContext('2d'),
   			 config0
   	 );
   	 chart1= new Chart(
   			 document.querySelector('#do-gp-'+i).getContext('2d'),
   			 config1
   	 );
   	 chart2= new Chart(
   			 document.querySelector('#ph-gp-'+i).getContext('2d'),
   			 config2
   	 );
   	 chart3= new Chart(
   			 document.querySelector('#salt-gp-'+i).getContext('2d'),
   			 config3
   	 );
    }
    
    
    
    console.log(data0)
    console.log(data1)
    console.log(data2)
    console.log(data3)
    for(let i=0;i<12;i++){
    	console.log(res[i].temp_ACC)
    	data0.datasets[0].data.push(res[i].temp_ACC);
//    	data0.datasets[0].backgroundColor.push(3 >=res[i].temp_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
//    	data0.datasets[0].borderColor.push(3 >= res[i].temp_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
//    	
//    	data1.datasets[0].data.push(res[i].do_ACC);
//    	data1.datasets[0].backgroundColor.push(3 >=res[i].do_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
//    	data1.datasets[0].borderColor.push(3 >= res[i].do_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
//    	
//    	data2.datasets[0].data.push(res[i].ph_ACC);
//    	data2.datasets[0].backgroundColor.push(3 >=res[i].ph_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
//    	data2.datasets[0].borderColor.push(3 >= res[i].ph_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');   
//    	
//    	data3.datasets[0].data.push(res[i].salt_ACC);
//    	data3.datasets[0].backgroundColor.push(3 >=res[i].salt_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
//    	data3.datasets[0].borderColor.push(3 >= res[i].salt_ACC ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
    }
    
   	 chart0.update();
   	 chart1.update();
   	 chart2.update();
   	 chart3.update();
}               
setInterval(lineChartView(), 3000);

        },
        error : function(){
          console.log('요청실패');
        }
      });