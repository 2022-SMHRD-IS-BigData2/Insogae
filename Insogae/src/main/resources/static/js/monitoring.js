const myButton = document.getElementById("next-page");
;
    myButton.addEventListener('click', e=> {
      document.getElementById("container").scrollIntoView({behavior:'smooth', block: "nearest", inline: "end"});
    });

const myButton2 = document.getElementById("before-page");
;
    myButton2.addEventListener('click', e=> {
      document.getElementById("container").scrollIntoView({behavior:'smooth', block: "nearest", inline: "start"});
    });    
    

$.ajax({
    url : "timetank",
    
    success : function(res){
        // 3. 응답받은 데이터를 console 출력
        
  google.charts.load('current', {'packages':['gauge']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data1_guage = google.visualization.arrayToDataTable(
        
    [
      ['Label', 'Value'],
      ['DO', 10],
      
    ]);


		 var data2_guage = google.visualization.arrayToDataTable(
        
        [
          ['Label', 'Value'],
          ['SALT', 10],
        ]);


        var data3_guage = google.visualization.arrayToDataTable(
        
        [
          ['Label', 'Value'],
          ['PH', 10],
        ]);


        var data4_guage = google.visualization.arrayToDataTable(
        
        [
          ['Label', 'Value'],
          ['TEMP', 10],
        ]);




 var options1 = { //DO
      width: 200, height: 120,
      redFrom: 0, redTo: 3,
      greenFrom:3, greenTo: 10,
      minorTicks: 5,
      animation:{duration:400},
      max:10
    };
	

	
	
	var options2 = { //salt
      width: 200, height: 120,
      redFrom: 0, redTo: 10,
      yellowFrom: 34, yellowTo: 40,
      greenFrom:10, greenTo: 34,
      minorTicks: 5,
      animation:{duration:400},
      max:40
    };


    var options3 = {// ph
      width: 200, height: 120,
      redFrom: 0, redTo: 7.5,
      greenFrom:7.5, greenTo: 10,
      minorTicks: 5,
      animation:{duration:400},
      max:10
    };

    var options4 = {//temp
      width: 200, height: 120,
      redFrom: 0, redTo: 6,
      yellowFrom: 32, yellowTo: 50,
      greenFrom:6, greenTo: 34,
      minorTicks: 5,
      animation:{duration:400},
      max:50
    };

	var chart1_guage = new google.visualization.Gauge(document.getElementById('chart_div1'));
    var chart2_guage = new google.visualization.Gauge(document.getElementById('chart_div2'));
    var chart3_guage = new google.visualization.Gauge(document.getElementById('chart_div3'));
    var chart4_guage = new google.visualization.Gauge(document.getElementById('chart_div4'));

    

    chart1_guage.draw(data1_guage, options1);
    chart2_guage.draw(data2_guage, options2);
    chart3_guage.draw(data3_guage, options3);
    chart4_guage.draw(data4_guage, options4);
        
        
        
        
        var count = 0;
        console.log(res)
        setInterval(() => {
        	 console.log(res[count])
        	 time_data = res[count].record_DATE.split('T')[1].split('.')[0]
        	 
        	 do_data = res[count].do.toFixed(2);
        	 ph_data = res[count].ph.toFixed(2);
        	 temp_data = res[count].temp.toFixed(2);
        	 salt_data = res[count].salt.toFixed(2);
        	 
            $('.ondo-n').html("")
            $('.do-n').html("")
            $('.temp-n').html("")
            $('.salt-n').html("")
            $('.ph-n').html("")
            
       	 let do_do = `<h5>`+do_data+`ppm</h5>`;
     		let ph=`<h5>`+ph_data+`ph</h5>`;
     		 let temp=`<h5>`+temp_data+`°C</h5>`;
     		 let salt=`<h5>`+salt_data+`psu</h5>`;
     		
     		
            $('.ondo-n').append(temp);
            $('.do-n').append(do_do);
            $('.temp-n').append(temp);
            $('.salt-n').append(salt);
            $('.ph-n').append(ph);
          
            data1_guage.setValue( 0,1,res[count].do.toFixed(1));
            chart1_guage.draw(data1_guage, options1);

				data2_guage.setValue( 0,1,res[count].salt.toFixed(1));
				chart2_guage.draw(data2_guage, options2);

				data3_guage.setValue( 0,1,res[count].ph.toFixed(1));
				chart3_guage.draw(data3_guage, options3);

				data4_guage.setValue( 0,1,res[count].temp.toFixed(1));
				chart4_guage.draw(data4_guage, options4);
            
            count++
        }, 1500
              
        );


		// 차트 그래프 표현 부분
        
        // 차트 초기화
          let labels = [];
		
          const data0 = {
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
          

          const data1 = {
            labels: labels,
            datasets: [{
              label: 'PH',
              data: [],
              fill: false,
              backgroundColor: [],
              borderColor: [],
              tension: 0.1
            }]
          };
          const data2 = {
            labels: labels,
            datasets: [{
              label: 'TEMP',
              data: [],
              fill: false,
              backgroundColor: [],
              borderColor: [],
              tension: 0.1
            }]
          };
          const data3 = {
            labels: labels,
            datasets: [{
              label: 'SALT',
              data: [],
              fill: false,
              backgroundColor: [],
              borderColor: [],
              tension: 0.1
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
            type : 'line',
            data: data2,
            options: {
              scales: {
                x: {
                  tick:{
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
                  tick:{
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
          document.getElementById('Chart_do'),
          config0
          );
          let chart1 = new Chart(
          document.getElementById('Chart_ph'),
          config1
          );
          let chart2 = new Chart(
          document.getElementById('Chart_temp'),
          config2
          );
          let chart3 = new Chart(
          document.getElementById('Chart_salt'),
          config3
          );
        
          
  
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
          data0.datasets[0].data.push(res[count].do);
          data0.datasets[0].backgroundColor.push(3 >=res[count].do ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
          data0.datasets[0].borderColor.push(3 >= res[count].do ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
          data1.datasets[0].data.push(res[count].ph);
          data1.datasets[0].backgroundColor.push(7.5 >= res[count].ph >= 8.5 ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
          data1.datasets[0].borderColor.push(7.5 >= res[count].ph >= 8.5 ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
          data2.datasets[0].data.push(res[count].temp);
          data2.datasets[0].backgroundColor.push(25 >= res[count].temp >= 30 ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
          data2.datasets[0].borderColor.push(25 >= res[count].temp >= 30 ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
          data3.datasets[0].data.push(res[count].salt);
          data3.datasets[0].backgroundColor.push(20 >= res[count].salt >= 34 ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
          data3.datasets[0].borderColor.push(20 >= res[count].salt >= 34 ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');

          chart0.update();
          chart1.update();
          chart2.update();
          chart3.update();
          count++;
          }, 3000); 
        
    
  } 
    
    },
        
       
    error : function(){
        console.log('요청실패');
    }});        
	
    


function currentTime() {
  const date = new Date(); 
  let yyyy = date.getFullYear();
  let MM = date.getMonth()+1;
  let dd = date.getDate();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh > 12) {
    session = "PM";
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;

  const time = yyyy + "년 " + MM + "월 " + dd + "일 " + session + " "  + hh + ":" + mm;

  document.getElementById("clock").innerText = time;

  setTimeout(() => currentTime(), 1000);
}

currentTime();

function currentTime2() {
  const date2 = new Date(); 
  let yyyy = date2.getFullYear();
  let MM = date2.getMonth()+1;
  let dd = date2.getDate();
  let hh = date2.getHours();
  let mm = date2.getMinutes();
  let ss = date2.getSeconds();
  let session = "AM";

  if (hh > 12) {
    session = "PM";
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;

  const time = yyyy + "년 " + MM + "월 " + dd + "일 " + session + " "  + hh + ":" + mm;

  document.getElementById("clock2").innerText = time;

  setTimeout(() => currentTime2(), 1000);
}

currentTime2();



function currentTime3() {
  const date3 = new Date(); 
  let yyyy = date3.getFullYear();
  let MM = date3.getMonth()+1;
  let dd = date3.getDate();
  let hh = date3.getHours();
  let mm = date3.getMinutes();
  let ss = date3.getSeconds();
  let session = "AM";

  if (hh > 12) {
    session = "PM";
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;

  const time = yyyy + "년 " + MM + "월 " + dd + "일 " + session + " "  + hh + ":" + mm;

  document.getElementById("clock3").innerText = time;

  setTimeout(() => currentTime3(), 1000);
}

currentTime3();


function currentTime4() {
  const date4 = new Date(); 
  let yyyy = date4.getFullYear();
  let MM = date4.getMonth()+1;
  let dd = date4.getDate();
  let hh = date4.getHours();
  let mm = date4.getMinutes();
  let ss = date4.getSeconds();
  let session = "AM";

  if (hh > 12) {
    session = "PM";
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;

  const time = yyyy + "년 " + MM + "월 " + dd + "일 " + session + " "  + hh + ":" + mm;

  document.getElementById("clock4").innerText = time;

  setTimeout(() => currentTime4(), 1000);
}

currentTime4();



function currentTime5() {
  const date5 = new Date(); 
  let yyyy = date5.getFullYear();
  let MM = date5.getMonth()+1;
  let dd = date5.getDate();
  let hh = date5.getHours();
  let mm = date5.getMinutes();
  let ss = date5.getSeconds();
  let session = "AM";

  if (hh > 12) {
    session = "PM";
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;

  const time = yyyy + "년 " + MM + "월 " + dd + "일 " + session + " "  + hh + ":" + mm;

  document.getElementById("clock5").innerText = time;

  setTimeout(() => currentTime5(), 1000);
}

currentTime5();



function currentTime6() {
  const date6 = new Date(); 
  let yyyy = date6.getFullYear();
  let MM = date6.getMonth()+1;
  let dd = date6.getDate();
  let hh = date6.getHours();
  let mm = date6.getMinutes();
  let ss = date6.getSeconds();
  let session = "AM";

  if (hh > 12) {
    session = "PM";
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;

  const time = yyyy + "년 " + MM + "월 " + dd + "일 " + session + " "  + hh + ":" + mm;

  document.getElementById("clock6").innerText = time;

  setTimeout(() => currentTime6(), 1000);
}

currentTime6();



function currentTime7() {
  const date7 = new Date(); 
  let yyyy = date7.getFullYear();
  let MM = date7.getMonth()+1;
  let dd = date7.getDate();
  let hh = date7.getHours();
  let mm = date7.getMinutes();
  let ss = date7.getSeconds();
  let session = "AM";

  if (hh > 12) {
    session = "PM";
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;

  const time = yyyy + "년 " + MM + "월 " + dd + "일 " + session + " "  + hh + ":" + mm;

  document.getElementById("clock7").innerText = time;

  setTimeout(() => currentTime7(), 1000);
}

currentTime7();



function currentTime8() {
  const date8 = new Date(); 
  let yyyy = date8.getFullYear();
  let MM = date8.getMonth()+1;
  let dd = date8.getDate();
  let hh = date8.getHours();
  let mm = date8.getMinutes();
  let ss = date8.getSeconds();
  let session = "AM";

  if (hh > 12) {
    session = "PM";
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;

  const time = yyyy + "년 " + MM + "월 " + dd + "일 " + session + " "  + hh + ":" + mm;

  document.getElementById("clock8").innerText = time;

  setTimeout(() => currentTime8(), 1000);
}

currentTime8();


