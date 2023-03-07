console.log($('#user-id')[0].innerText);
var user = $('#user-id')[0].innerText;
const tankIdArray = [];
var data;
function getData() {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: "/tank_id",
      type: "post",
      data: {"user":user},
      success: function(response) {
        resolve(response);
      },
      error: function(xhr, status, error) {
        reject(error);
      }
    });
  });
}

getData().then(function(data) {
  // Ajax 요청이 완료되면 실행될 코드
  console.log(data);
  for (let i =0; i<data.length;i++){
	  tankIdArray.push(data[i].tank_ID);
  }
}).catch(function(error) {
  // 에러 처리 코드
  console.error(error);
});
console.log(tankIdArray.value);
console.log(typeof tankIdArray);
let num = 8; // 수조 개수 설정

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
for (let i =1; i <=num; i++){
	tankdataArray.push('tank' + i+'data');
	chartIdArray1.push('chart-div-' + i+'1');
	chartIdArray2.push('chart-div-' + i+'2');
	chartIdArray3.push('chart-div-' + i+'3');
	chartIdArray4.push('chart-div-' + i+'4');
	ondoArray.push('ondo-'+i);
	doArray.push('do-'+i);
	phArray.push('ph-'+i);
	saltArray.push('salt-'+i);
};

var monitor1 = document.getElementById('monitor-1'); // 첫 페이지 화면 ( 수조 1~4 )
var monitor2 = document.getElementById('monitor-2'); // 오른쪽 버튼 클릭했을때 나타나는 화면 (수조 5~8) 
    for (let i = 0; i < num; i++) {
        tankArray[i] = `
    				<div class="rectangle-2">
						<div class="tank">
							<div class="tct">양식장 수조`+(i+1)+`</div>
							<div class="warning">
								<div class="wl"></div>
								<div id="clock8" class="tctm">2023년 2월 27일 PM 04:55</div>
							</div>
						</div>
						<div class="rectangle-3">
							<div class="rectangle-gp">
								<div class="ondo-gp" id="`+chartIdArray1[i]+`"></div>
								<div class="do-gp" id="`+chartIdArray2[i]+`"></div>
								<div class="ph-gp" id="`+chartIdArray3[i]+`"></div>
								<div class="salt-gp" id="`+chartIdArray4[i]+`"></div>
							</div>
							<div class="rectangle-data">
								<div class="ondo">
									<div class="rectangle-value">온도</div>
									<div class="ondo-n" id="`+ondoArray[i]+`"></div>
								</div>
								<hr class="line-1"></hr>
								<div class="do">
									<div class="rectangle-value">DO</div>
									<div class="do-n" id="`+doArray[i]+`"></div>
								</div>
								<hr class="line-1"></hr>
								<div class="ph">
									<div class="rectangle-value">pH</div>
									<div class="ph-n" id="`+phArray[i]+`"></div>
								</div>
								<hr class="line-1"></hr>
								<div class="salt">
									<div class="rectangle-value">염분</div>
									<div class="salt-n" id="`+saltArray[i]+`"></div>
								</div>
							</div>
						</div>
					</div>
        `;
    };
    arrow1= `
    <div id="btn-container">
		<button class="btn" id="next-page">
			<i class="fa-solid fa-right-long fa-3x"></i>
		</button>
		<!-- <button class="btn"><i class="fa-solid fa-left-long fa-3x"></i></button> -->
	</div>
    `;
	arrow2= `
    <div id="btn-container">
		<button class="btn" id="before-page">
			<i class="fa-solid fa-right-long fa-3x"></i>
		</button>
		<!-- <button class="btn"><i class="fa-solid fa-left-long fa-3x"></i></button> -->
	</div>
    `;
	var tags1 = "";
	var tags2 = "";
    for (let i = 0; i < num; i++) {
		if(i<4){
			tags1 += tankArray[i];
		} else if(i>=4){
			tags2 += tankArray[i];
		}
    };
    monitor1.innerHTML = arrow1+tags1;
	monitor2.innerHTML = arrow2+tags2;


const myButton = document.getElementById("next-page");
myButton.addEventListener('click', () => {
	document.getElementById("container").scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "end" });
});

const myButton2 = document.getElementById("before-page");
myButton2.addEventListener('click', () => {
	document.getElementById("container").scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "start" });
});


for (let i =0; i <num; i++){
	$.ajax({
		url: tankdataArray[i],// 수조1

		success: function(res) {
			// 3. 응답받은 데이터를 console 출력
	
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
					greenFrom: 3, greenTo: 10,
					minorTicks: 5,
					animation: { duration: 400 },
					max: 10
				};
	
	
	
	
				var options2 = { // salt
					width: 180, height: 180, 
					redFrom: 0, redTo: 10,
					yellowFrom: 34, yellowTo: 40,
					greenFrom: 10, greenTo: 34,
					minorTicks: 5,
					animation: { duration: 400 },
					max: 40
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
						salt_data = res[count].salt.toFixed(2);
						$('#'+ondoArray[i]).html("");
						$('#'+doArray[i]).html("");
						$('#'+saltArray[i]).html("");
						$('#'+phArray[i]).html("");
		
						let do_do = `<h5>` + do_data + `ppm</h5>`;
						let ph = `<h5>` + ph_data + `ph</h5>`;
						let temp = `<h5>` + temp_data + `°C</h5>`;
						let salt = `<h5>` + salt_data + `psu</h5>`;
		
						$('#'+ondoArray[i]).append(temp);
						$('#'+doArray[i]).append(do_do);
						$('#'+saltArray[i]).append(salt);
						$('#'+phArray[i]).append(ph);
		
						data1_guage.setValue(0, 1, res[count].do.toFixed(1));
						chart1_guage.draw(data1_guage, options1);
		
						data2_guage.setValue(0, 1, res[count].salt.toFixed(1));
						chart2_guage.draw(data2_guage, options2);
		
						data3_guage.setValue(0, 1, res[count].ph.toFixed(1));
						chart3_guage.draw(data3_guage, options3);
		
						data4_guage.setValue(0, 1, res[count].temp.toFixed(1));
						chart4_guage.draw(data4_guage, options4);
		
						count++;
					}, 1500
				);
			}
		},
		error: function() {
			console.log('요청실패');
		}
	});
}


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
