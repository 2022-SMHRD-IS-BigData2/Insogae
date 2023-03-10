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
const ondoArray = []; // 각 수조별 온도를 담은 id선택자 배열 ex) ondo-1(수조1), ondo-2(수조2)
const doArray = []; // 각 수조별 DO를 담은 id선택자 배열 ex) do-1(수조1), do-2(수조2)
const phArray = []; // 각 수조별 pH를 담은 id선택자 배열 ex) ph-1(수조1), ph-2(수조2)
const saltArray = []; // 각 수조별 염분을 담은 id선택자 배열 ex) salt-1(수조1), salt-2(수조2)
const tankArray = []; // 수조의 갯수만큼 div박스를 생성해줄 배열 ex) ondo-1(수조1), ondo-2(수조2)


for (let i =1; i <=num; i++){
	tankdataArray.push('tank' +i+'data');
	ondoArray.push('ondo-'+i);
	doArray.push('do-'+i);
	phArray.push('ph-'+i);
	saltArray.push('salt-'+i);
};
let dangerDO ="?"; // 전달 값 초기화
let dangerPH ="?";
let dangerTEMP ="?";
let dangerSALT ="?";
let dangerDOName ="?"; // 전달 값 초기화
let dangerPHName ="?";
let dangerTEMPName ="?";
let dangerSALTName ="?";
for (let i=0;i<num;i++){
	$.ajax({
		url : tankdataArray[i],
		success : function(res){
		
			
			var count = 0;
			
			setInterval(() => {
					time_data = res[count].record_DATE.split('T')[1].split('.')[0]
	
					do_data = res[count].do.toFixed(2);
					ph_data = res[count].ph.toFixed(2);
					temp_data = res[count].temp.toFixed(2);
					salt_data = res[count].salt.toFixed(2);
					
					
					if(do_data<6.1){
						document.getElementById(doArray[i]).style.color="red";
						console.log("위험수치"+do_data)
						$.ajax({
							url : "alarm_data",
							data : {
								userData : user,
								tankIdData : tankIdList[i],
								dangerData : do_data,
								dangerDataName : "DO"
							},
							success : function(res){
								console.log(res)
							},
							error : function(){
								console.log('에러~')
							}
						})
						
					}else{document.getElementById(doArray[i]).style.color="white";}
						
					
					 if(ph_data<5){
						document.getElementById(phArray[i]).style.color="red";
						$.ajax({
							url : "alarm_data",
							data : {
								userData : user,
								tankIdData : tankIdList[i],
								dangerData : ph_data,
								dangerDataName : "pH"
							},
							success : function(res){
								console.log(res)
							},
							error : function(){
								console.log('에러~')
							}
						})
	
					}
					else{document.getElementById(phArray[i]).style.color="white";}
					
					if(temp_data<6){
						document.getElementById(ondoArray[i]).style.color="red";
						$.ajax({
							url : "alarm_data",
							data : {
								userData : user,
								tankIdData : tankIdList[i],
								dangerData : temp_data,
								dangerDataName : "온도"
							},
							success : function(res){
								console.log(res)
							},
							error : function(){
								console.log('에러~')
							}
						})
						
					}else{
						document.getElementById(ondoArray[i]).style.color="white";
					}
					
					 if(salt_data>10){
						document.getElementById(saltArray[i]).style.color="red";
						$.ajax({
							url : "alarm_data",
							data : {
								userData : user,
								tankIdData : tankIdList[i],
								dangerData : salt_data,
								dangerDataName : "염도"
							},
							success : function(res){
								console.log(res)
							},
							error : function(){
								console.log('에러~')
							}
						})
						
					}else{
						document.getElementById(saltArray[i]).style.color="white";
					}
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
					
					count++;
				}, 5000
				)
		},
		error : function(){
			console.log("에러!");
		}
	})
};