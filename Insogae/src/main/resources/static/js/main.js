let num = 8; // 수조 개수 설정

// 수조 이름 
var tank = $('#tank-id').text();

// 수조 이름들을 배열에 담기
const tankIdList =[];
for (let i =1; i<=num; i++){
	tankIdList.push($("#tank-"+i).text());
}

// 회사 이름, 회사의 각 수조위치별 정보 저장하기위한 변수 설정
var user = $('#user-id').text();
var loc1 = document.querySelector('#info > table > tbody > tr:nth-child(1) > td:nth-child(2)')
var cnt1 = document.querySelector("#info > table > tbody > tr:nth-child(3) > td");
var sum1 = document.querySelector("#info > table > tbody > tr:nth-child(4) > td");
var loc2 = document.querySelector("#info > table > tbody > tr:nth-child(5) > td:nth-child(2)")
var cnt2 = document.querySelector("#info > table > tbody > tr:nth-child(7) > td")
var sum2 = document.querySelector("#info > table > tbody > tr:nth-child(8) > td");
var loc3 = document.querySelector('#info > table > tbody > tr:nth-child(9) > td:nth-child(2)')
var cnt3 = document.querySelector("#info > table > tbody > tr:nth-child(11) > td");
var sum3 = document.querySelector("#info > table > tbody > tr:nth-child(13) > td");

// 수조 위치별 정보에관한 데이터 보여주기
$.ajax({
	url : 'location_data',
	data : {
		COMPANY_ID : user
	},
	success : function(res){
		loc1.innerText = "  🏠 "+res[0].location;
		sum1.innerText = "  🌊 약 "+res[0].count+"개";
		cnt1.innerText = "  🦐 "+res[0].sum+"마리";
		loc2.innerText = "  🏠 "+res[1].location;
		sum2.innerText = "  🌊 약 "+res[1].count+"개";
		cnt2.innerText = "  🦐 "+res[1].sum+"마리";
		loc3.innerText = "  🏠 "+res[2].location;
		cnt3.innerText = "  🌊 약 "+res[2].count+"개";
	},
	error : function(){
		console.log('error!');
	}
})


//const tankdataArray = []; // id선택자 리스트 ex) id = "tank1data
//const ondoArray = []; // 각 수조별 온도를 담은 id선택자 배열 ex) ondo-3(수조1), ondo-2(수조2)
//const doArray = []; // 각 수조별 DO를 담은 id선택자 배열 ex) do-3(수조1), do-2(수조2)
//const phArray = []; // 각 수조별 pH를 담은 id선택자 배열 ex) ph-3(수조1), ph-2(수조2)
//const saltArray = []; // 각 수조별 염분을 담은 id선택자 배열 ex) salt-3(수조1), salt-2(수조2)
//const tankArray = []; // 수조의 갯수만큼 div박스를 생성해줄 배열 ex) ondo-3(수조1), ondo-2(수조2)
//
//
//
//for (let i =1; i <=num; i++){
//	tankdataArray.push('tank' +i+'data');
//	ondoArray.push('ondo-'+i);
//	doArray.push('do-'+i);
//	phArray.push('ph-'+i);
//	saltArray.push('salt-'+i);
//};

$.ajax({
		method:  "post",
		url : "datamonitoring", // RestTankDataController
		success : function(res){
			// 각 수조별 데이터 받아서 보여주기
			
			for (let i =0; i<num; i++){
				let do_do = `<h5>` + res[i].do_ACC.toFixed(2) + `ppm</h5>`;
			    let ph = `<h5>` + res[i].ph_ACC.toFixed(2) + `ph</h5>`;
			    let temp = `<h5>` + res[i].temp_ACC.toFixed(2) + `°C</h5>`;
			    let salt = `<h5>` + res[i].salt_ACC.toFixed(2) + `psu</h5>`;
		
			    $('#ondo-'+(i+1)).html(temp);
			    $('#do-'+(i+1)).html(do_do);
			    $('#salt-'+(i+1)).html(salt);
			    $('#ph-'+(i+1)).html(ph);
			}
				//function currentData() {
				//console.log(res);
				//	for (let i =0; i<num; i++){
				//		let do_do = `<h5>` + res[i].do_ACC.toFixed(2) + `ppm</h5>`;
				//	    let ph = `<h5>` + res[i].ph_ACC.toFixed(2) + `ph</h5>`;
				//	    let temp = `<h5>` + res[i].temp_ACC.toFixed(2) + `°C</h5>`;
				//	    let salt = `<h5>` + res[i].salt_ACC.toFixed(2) + `psu</h5>`;
				//
				//	    $('#ondo-'+(i+1)).html(temp);
				//	    $('#do-'+(i+1)).html(do_do);
				//	    $('#salt-'+(i+1)).html(salt);
				//	    $('#ph-'+(i+1)).html(ph);
				//
				//	}
				//
				//  setTimeout(() => currentData(), 3000);
				//
				//}
				//
				//currentData();
		},
		error : function(){
			console.log("에러!");
		}
	})
	
var socketPy = new WebSocket("ws://localhost:8123/socketPy");

socketPy.onopen = function() {
	console.dir("파이썬웹소켓서버 연결");
	socketPy.send("파이썬웹소켓연결됨!, 클라이언트: main.js");
};
socketPy.onmessage = function(event) {
	// 파이썬 웹서버로부터 갱신되는 데이터를 받아서 처리
	// Json객체로 변환
	var dataList = JSON.parse(event.data);
	  if (dataList.type === 'insertData') {
		  updateData(dataList.value);
		    // 첫 번째 데이터 처리
		  } else if (dataList.type === 'test') {
		  console.log(dataList.value);
		    // 두 번째 데이터 처리
		  } else if (dataList.type === 'dangerData'){
			  console.log(dataList.value);
		  } else if (dataList.type === 'predictData'){
			  console.log(dataList.value);
		  }
};


function updateData(res){
	for (let i =0; i<num; i++){
		let do_do = `<h5>` + parseFloat(res[i].DO).toFixed(2) + `ppm</h5>`;
	    let ph = `<h5>` + parseFloat(res[i].PH).toFixed(2) + `ph</h5>`;
	    let temp = `<h5>` + parseFloat(res[i].TEMP).toFixed(2) + `°C</h5>`;
	    let salt = `<h5>` + parseFloat(res[i].SALT).toFixed(2) + `psu</h5>`;

	    $('#ondo-'+(i+1)).html(temp);
	    $('#do-'+(i+1)).html(do_do);
	    $('#salt-'+(i+1)).html(salt);
	    $('#ph-'+(i+1)).html(ph);
	}
}
