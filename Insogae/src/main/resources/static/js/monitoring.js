const myButton = document.getElementById("next-page");
myButton.addEventListener('click', () => {
	document.getElementById("container").scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "end" });
});

const myButton2 = document.getElementById("before-page");
myButton2.addEventListener('click', () => {
	document.getElementById("container").scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "start" });
});

let num = 8; // 수조 개수 설정
const tankNameArray = []; // 수조이름을 넣을 배열
// 배열에 수조 이름들 차례대로 넣기
for (let i =0; i<num; i++){
	tankNameArray.push($('.tct')[i].text());	
}
const tankdataArray = []; // id선택자 리스트 ex) id = "tank1data
const chartIdArray1 = []; // 차트를 담은 id선택자 배열 ex) chart-div-11, chart-div-12 ...
const chartIdArray2 = []; // 차트를 담은 id선택자 배열 ex) chart-div-21, chart-div-22 ...
const chartIdArray3 = []; // 차트를 담은 id선택자 배열 ex) chart-div-31, chart-div-32 ...
const chartIdArray4 = []; // 차트를 담은 id선택자 배열 ex) chart-div-41, chart-div-42 ...
const ondoArray = []; // 각 수조별 온도를 담은 id선택자 배열 ex) ondo-1(수조1), ondo-2(수조2)
const doArray = []; // 각 수조별 DO를 담은 id선택자 배열 ex) do-1(수조1), do-2(수조2)
const phArray = []; // 각 수조별 pH를 담은 id선택자 배열 ex) ph-1(수조1), ph-2(수조2)
const saltArray = []; // 각 수조별 염분을 담은 id선택자 배열 ex) salt-1(수조1), salt-2(수조2)
const tankArray = []; // 수조의 갯수만큼 div박스를 생성해줄 배열 ex) ondo-1(수조1), ondo-2(수조2)
const timeArray = []; // 각 수조별 시간을 담은 id 선택자 배열
const wlArray=[]; // 상단 경고 색상
for (let i =1; i <=num; i++){
	tankdataArray.push('tank' +i+'data');
	chartIdArray1.push('chart-div-' + i+'1');
	chartIdArray2.push('chart-div-' + i+'2');
	chartIdArray3.push('chart-div-' + i+'3');
	chartIdArray4.push('chart-div-' + i+'4');
	ondoArray.push('ondo-'+i);
	doArray.push('do-'+i);
	phArray.push('ph-'+i);
	saltArray.push('salt-'+i);
	timeArray.push('time-'+i);
	wlArray.push('wl-'+i);
};

	$.ajax({
		url: 'tankData',// 수조1

		success: function(res) {
			// 1. res에서 얻어낸 데이터랑 tankNameArray 배열에담긴 수조이름이랑 비교
			// 2. 수조별로 분리해서 for문을 통해 함수로 나누기
			// 2. 각 수조이름별로 setInterval() 함수를 통해 출력
			// 3. 
	
			google.charts.load('current', { 'packages': ['gauge'] });
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
	
	
	
	
				var options1 = { // DO
					width: 180, height: 180, 
					redFrom: 0, redTo: 3,
					greenFrom: 3, greenTo: 15,
					minorTicks: 5,
					animation: { duration: 400 },
					max: 15
				};
	
	
	
	
				var options2 = { // salt
					width: 180, height: 180, 
					redFrom: 0, redTo: 10,
					yellowFrom: 34, yellowTo: 40,
					greenFrom: 10, greenTo: 34,
					minorTicks: 5,
					animation: { duration: 400 },
					max: 100
				};
	
	
				var options3 = {// ph
					width: 180, height: 180, 
					redFrom: 0, redTo: 7.5,
					greenFrom: 7.5, greenTo: 10,
					minorTicks: 5,
					animation: { duration: 400 },
					max: 10
				};
	
				var options4 = {// temp
					width: 180, height: 180, 
					redFrom: 0, redTo: 6,
					yellowFrom: 32, yellowTo: 50,
					greenFrom: 6, greenTo: 34,
					minorTicks: 5,
					animation: { duration: 400 },
					max: 50
				};
	
				var chart1_guage = new google.visualization.Gauge(document.getElementById(chartIdArray1[i]));
				var chart2_guage = new google.visualization.Gauge(document.getElementById(chartIdArray2[i]));
				var chart3_guage = new google.visualization.Gauge(document.getElementById(chartIdArray3[i]));
				var chart4_guage = new google.visualization.Gauge(document.getElementById(chartIdArray4[i]));
	
	
	
				chart1_guage.draw(data1_guage, options1);
				chart2_guage.draw(data2_guage, options2);
				chart3_guage.draw(data3_guage, options3);
				chart4_guage.draw(data4_guage, options4);
	
	
	
	
				var count = 0;
				setInterval(() => {
						time_data = res[count].record_DATE.split('T')[1].split('.')[0]
		
						do_data = res[count].do.toFixed(2);
						ph_data = res[count].ph.toFixed(2);
						temp_data = res[count].temp.toFixed(2);
						salt_data = res[count].salt.toFixed(2)*100;
						
						
						
					
					
					
					if(do_data<6.1){
						document.getElementById(doArray[i]).style.color="red";
						console.log(do_data)
						console.log("DO 위험!!!")
							document.getElementById(doArray[i]).style.color="red";
							
							function showToast(message, duration) {
							  const toast = document.getElementById('toast');
							  toast.innerText = message;
							  toast.style.display = 'block';
							  setTimeout(() => {
							    toast.style.display = 'none';
							  }, duration);
							}
							showToast('경고!', 1500);
						
						
					}else{document.getElementById(doArray[i]).style.color="white";}
					
					
					 if(ph_data<5){
						document.getElementById(phArray[i]).style.color="red";
	
					}
					else{document.getElementById(phArray[i]).style.color="white";}
					
					if(temp_data<6){
						document.getElementById(ondoArray[i]).style.color="red";
						
					}else{
						document.getElementById(ondoArray[i]).style.color="white";
					}
					
					 if(salt_data<10){
						document.getElementById(saltArray[i]).style.color="red";
						
					}else{
						document.getElementById(saltArray[i]).style.color="white";
					}
					
					
						
					if(do_data<3||ph_data<7.5){
							var wl = document.getElementById(wlArray[i])
							wl.style.backgroundColor="red"
						}
						 if(temp_data<6||salt_data<10){
							var wl = document.getElementById(wlArray[i])
							wl.style.backgroundColor="red"
						}
						
						
						
						$('#'+ondoArray[i]).html("");
						$('#'+doArray[i]).html("");
						$('#'+saltArray[i]).html("");
						$('#'+phArray[i]).html("");
						$('#'+timeArray[i]).html("");
		
						let do_do = `<h5>` + do_data + `ppm</h5>`;
						let ph = `<h5>` + ph_data + `ph</h5>`;
						let temp = `<h5>` + temp_data + `°C</h5>`;
						let salt = `<h5>` + salt_data + `psu</h5>`;
						let time = `<h5>현재시간 ` + time_data + `</h5>`;
		
						$('#'+ondoArray[i]).append(temp);
						$('#'+doArray[i]).append(do_do);
						$('#'+saltArray[i]).append(salt);
						$('#'+phArray[i]).append(ph);
						$('#'+timeArray[i]).append(time);
		
						data1_guage.setValue(0, 1, res[count].do.toFixed(1));
						chart1_guage.draw(data1_guage, options1);
		
						data2_guage.setValue(0, 1, res[count].salt.toFixed(1)*100);
						chart2_guage.draw(data2_guage, options2);
		
						data3_guage.setValue(0, 1, res[count].ph.toFixed(1));
						chart3_guage.draw(data3_guage, options3);
		
						data4_guage.setValue(0, 1, res[count].temp.toFixed(1));
						chart4_guage.draw(data4_guage, options4);
		
						count++;
					}, 3000
				);
			}
		},
		error: function() {
			console.log('요청실패');
		}
	});


var toast = new bootstrap.Toast($('#liveToast'));

function showToast() {
  toast.show();
}

setInterval(function() {
  showToast();
  setTimeout(function() {
    toast.hide(false);
  }, 3000);
}, 5000);





/*
function currentTime() {
	const date = new Date();
	let yyyy = date.getFullYear();
	let MM = date.getMonth() + 1;
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

	const time = yyyy + "년 " + MM + "월 " + dd + "일 " + session + " " + hh + ":" + mm;
	
	for(let i =0; i<$(".tctm").length;i++){
		$(".tctm")[i].innerText = time;
	};

	setTimeout(() => currentTime(), 1000);
};

currentTime();
*/