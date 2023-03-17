let num = 8;
var tank = $('#tank-id').text();
const tankIdList =[];
for (let i =1; i<=num; i++){
	tankIdList.push($("#tank-"+i).text());
}
console.log(tankIdList);
console.log($('#user-id'));
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

$.ajax({
	url : 'location_data',
	data : {
		COMPANY_ID : user
	},
	success : function(res){
		console.log(res)
		console.log(res[2].sum);
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


const tankdataArray = []; // id선택자 리스트 ex) id = "tank1data
const ondoArray = []; // 각 수조별 온도를 담은 id선택자 배열 ex) ondo-3(수조1), ondo-2(수조2)
const doArray = []; // 각 수조별 DO를 담은 id선택자 배열 ex) do-3(수조1), do-2(수조2)
const phArray = []; // 각 수조별 pH를 담은 id선택자 배열 ex) ph-3(수조1), ph-2(수조2)
const saltArray = []; // 각 수조별 염분을 담은 id선택자 배열 ex) salt-3(수조1), salt-2(수조2)
const tankArray = []; // 수조의 갯수만큼 div박스를 생성해줄 배열 ex) ondo-3(수조1), ondo-2(수조2)


for (let i =1; i <=num; i++){
	tankdataArray.push('tank' +i+'data');
	ondoArray.push('ondo-'+i);
	doArray.push('do-'+i);
	phArray.push('ph-'+i);
	saltArray.push('salt-'+i);
};
/*let dangerDO ="?"; // 전달 값 초기화
let dangerPH ="?";
let dangerTEMP ="?";
let dangerSALT ="?";
let dangerDOName ="?"; // 전달 값 초기화
let dangerPHName ="?";
let dangerTEMPName ="?";
let dangerSALTName ="?";*/
	
	$.ajax({

		method:  "post",

		url : "datamonitoring",
		success : function(res){
		
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
	
var socketTest = new WebSocket("ws://localhost:8123/socket");

socketTest.onopen = function() {
	console.dir("WebSocket 연결 성공");
	socketTest.send("Hello, server! script");
};
socketTest.onmessage = function(event) {

	var dataList = JSON.parse(event.data);
	console.log(dataList);	
//	console.log(dataSet[0]);
//	dataList = [];
//	for (let i =0;i<dataSet.length;i++){
//		dataList.push(Object.fromEntries(dataSet[i].split(',').map(item => {
//			const [key, value] = item.split(':');
//			return [key, value];
//		})));
//	}
	updateData(dataList);

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
