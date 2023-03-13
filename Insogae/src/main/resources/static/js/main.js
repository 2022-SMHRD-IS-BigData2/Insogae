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
		url : "datamonitoring",
		
		success : function(res){
		
		
	var count =0;
			console.log(res);
			
		
			
			
function currentData() {
console.log(res[count]);
  time_data = res[count].record_DATE;
  do_data = res[count].do_ACC.toFixed(2);
  ph_data = res[count].ph_ACC.toFixed(2);
  temp_data = res[count].temp_ACC.toFixed(2);
  salt_data = res[count].salt_ACC.toFixed(2);



if(res[count].tank_ID=='WT11'){ 
 	$(`#ondo-1`).html("");
    $(`#do-1`).html("");
    $(`#salt-1`).html("");
    $(`#ph-1`).html("");

    let do_do = `<h5>` + do_data + `ppm</h5>`;
    let ph = `<h5>` + ph_data + `ph</h5>`;
    let temp = `<h5>` + temp_data + `°C</h5>`;
    let salt = `<h5>` + salt_data + `psu</h5>`;

    $(`#ondo-1`).append(temp);
    $(`#do-1`).append(do_do);
    $(`#salt-1`).append(salt);
    $(`#ph-1`).append(ph);
 }

else if(res[count].tank_ID=='WT12'){ 
 	$(`#ondo-2`).html("");
    $(`#do-2`).html("");
    $(`#salt-2`).html("");
    $(`#ph-2`).html("");

    let do_do = `<h5>` + do_data + `ppm</h5>`;
    let ph = `<h5>` + ph_data + `ph</h5>`;
    let temp = `<h5>` + temp_data + `°C</h5>`;
    let salt = `<h5>` + salt_data + `psu</h5>`;

    $(`#ondo-2`).append(temp);
    $(`#do-2`).append(do_do);
    $(`#salt-2`).append(salt);
    $(`#ph-2`).append(ph);
 }

else if(res[count].tank_ID=='WT13'){ 
 	$(`#ondo-3`).html("");
    $(`#do-3`).html("");
    $(`#salt-3`).html("");
    $(`#ph-3`).html("");

    let do_do = `<h5>` + do_data + `ppm</h5>`;
    let ph = `<h5>` + ph_data + `ph</h5>`;
    let temp = `<h5>` + temp_data + `°C</h5>`;
    let salt = `<h5>` + salt_data + `psu</h5>`;

    $(`#ondo-3`).append(temp);
    $(`#do-3`).append(do_do);
    $(`#salt-3`).append(salt);
    $(`#ph-3`).append(ph);
 }

else if(res[count].tank_ID=='WT14'){ 
 	$(`#ondo-4`).html("");
    $(`#do-4`).html("");
    $(`#salt-4`).html("");
    $(`#ph-4`).html("");

    let do_do = `<h5>` + do_data + `ppm</h5>`;
    let ph = `<h5>` + ph_data + `ph</h5>`;
    let temp = `<h5>` + temp_data + `°C</h5>`;
    let salt = `<h5>` + salt_data + `psu</h5>`;

    $(`#ondo-4`).append(temp);
    $(`#do-4`).append(do_do);
    $(`#salt-4`).append(salt);
    $(`#ph-4`).append(ph);
 }

else if(res[count].tank_ID=='WT21'){ 
 	$(`#ondo-5`).html("");
    $(`#do-5`).html("");
    $(`#salt-5`).html("");
    $(`#ph-5`).html("");

    let do_do = `<h5>` + do_data + `ppm</h5>`;
    let ph = `<h5>` + ph_data + `ph</h5>`;
    let temp = `<h5>` + temp_data + `°C</h5>`;
    let salt = `<h5>` + salt_data + `psu</h5>`;

    $(`#ondo-5`).append(temp);
    $(`#do-5`).append(do_do);
    $(`#salt-5`).append(salt);
    $(`#ph-5`).append(ph);
 }

else if(res[count].tank_ID=='WT22'){ 
 	$(`#ondo-6`).html("");
    $(`#do-6`).html("");
    $(`#salt-6`).html("");
    $(`#ph-6`).html("");

    let do_do = `<h5>` + do_data + `ppm</h5>`;
    let ph = `<h5>` + ph_data + `ph</h5>`;
    let temp = `<h5>` + temp_data + `°C</h5>`;
    let salt = `<h5>` + salt_data + `psu</h5>`;

    $(`#ondo-6`).append(temp);
    $(`#do-6`).append(do_do);
    $(`#salt-6`).append(salt);
    $(`#ph-6`).append(ph);
 }

else if(res[count].tank_ID=='WT23'){ 
 	$(`#ondo-7`).html("");
    $(`#do-7`).html("");
    $(`#salt-7`).html("");
    $(`#ph-7`).html("");

    let do_do = `<h5>` + do_data + `ppm</h5>`;
    let ph = `<h5>` + ph_data + `ph</h5>`;
    let temp = `<h5>` + temp_data + `°C</h5>`;
    let salt = `<h5>` + salt_data + `psu</h5>`;

    $(`#ondo-7`).append(temp);
    $(`#do-7`).append(do_do);
    $(`#salt-7`).append(salt);
    $(`#ph-7`).append(ph);
 }

else if(res[count].tank_ID=='WT31'){ 
 	$(`#ondo-8`).html("");
    $(`#do-8`).html("");
    $(`#salt-8`).html("");
    $(`#ph-8`).html("");

    let do_do = `<h5>` + do_data + `ppm</h5>`;
    let ph = `<h5>` + ph_data + `ph</h5>`;
    let temp = `<h5>` + temp_data + `°C</h5>`;
    let salt = `<h5>` + salt_data + `psu</h5>`;

    $(`#ondo-8`).append(temp);
    $(`#do-8`).append(do_do);
    $(`#salt-8`).append(salt);
    $(`#ph-8`).append(ph);
 }

if(count==11){
	count=0;
}

  count++;


  setTimeout(() => currentData(), 1000);


}

currentData();
				

			

		},
		error : function(){
			console.log("에러!");
		}
	})
	
	
