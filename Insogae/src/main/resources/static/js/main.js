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
		loc1.innerText = "  ๐  "+res[0].location;
		sum1.innerText = "  ๐ ์ฝ "+res[0].count+"๊ฐ";
		cnt1.innerText = "  ๐ฆ "+res[0].sum+"๋ง๋ฆฌ";
		loc2.innerText = "  ๐  "+res[1].location;
		sum2.innerText = "  ๐ ์ฝ "+res[1].count+"๊ฐ";
		cnt2.innerText = "  ๐ฆ "+res[1].sum+"๋ง๋ฆฌ";
		loc3.innerText = "  ๐  "+res[2].location;
		cnt3.innerText = "  ๐ ์ฝ "+res[2].count+"๊ฐ";
	},
	error : function(){
		console.log('error!');
	}
})


const tankdataArray = []; // id์ ํ์ ๋ฆฌ์คํธ ex) id = "tank1data
const ondoArray = []; // ๊ฐ ์์กฐ๋ณ ์จ๋๋ฅผ ๋ด์ id์ ํ์ ๋ฐฐ์ด ex) ondo-3(์์กฐ1), ondo-2(์์กฐ2)
const doArray = []; // ๊ฐ ์์กฐ๋ณ DO๋ฅผ ๋ด์ id์ ํ์ ๋ฐฐ์ด ex) do-3(์์กฐ1), do-2(์์กฐ2)
const phArray = []; // ๊ฐ ์์กฐ๋ณ pH๋ฅผ ๋ด์ id์ ํ์ ๋ฐฐ์ด ex) ph-3(์์กฐ1), ph-2(์์กฐ2)
const saltArray = []; // ๊ฐ ์์กฐ๋ณ ์ผ๋ถ์ ๋ด์ id์ ํ์ ๋ฐฐ์ด ex) salt-3(์์กฐ1), salt-2(์์กฐ2)
const tankArray = []; // ์์กฐ์ ๊ฐฏ์๋งํผ div๋ฐ์ค๋ฅผ ์์ฑํด์ค ๋ฐฐ์ด ex) ondo-3(์์กฐ1), ondo-2(์์กฐ2)


for (let i =1; i <=num; i++){
	tankdataArray.push('tank' +i+'data');
	ondoArray.push('ondo-'+i);
	doArray.push('do-'+i);
	phArray.push('ph-'+i);
	saltArray.push('salt-'+i);
};
/*let dangerDO ="?"; // ์ ๋ฌ ๊ฐ ์ด๊ธฐํ
let dangerPH ="?";
let dangerTEMP ="?";
let dangerSALT ="?";
let dangerDOName ="?"; // ์ ๋ฌ ๊ฐ ์ด๊ธฐํ
let dangerPHName ="?";
let dangerTEMPName ="?";
let dangerSALTName ="?";*/
	
	$.ajax({

		method:  "post",

		url : "datamonitoring",
		success : function(res){
		
		
function currentData() {
console.log(res);
	for (let i =0; i<num; i++){
		let do_do = `<h5>` + res[i].do_ACC.toFixed(2) + `ppm</h5>`;
	    let ph = `<h5>` + res[i].ph_ACC.toFixed(2) + `ph</h5>`;
	    let temp = `<h5>` + res[i].temp_ACC.toFixed(2) + `ยฐC</h5>`;
	    let salt = `<h5>` + res[i].salt_ACC.toFixed(2) + `psu</h5>`;

	    $('#ondo-'+(i+1)).html(temp);
	    $('#do-'+(i+1)).html(do_do);
	    $('#salt-'+(i+1)).html(salt);
	    $('#ph-'+(i+1)).html(ph);

	}

  setTimeout(() => currentData(), 3000);

}

currentData();
				

			

		},
		error : function(){
			console.log("์๋ฌ!");
		}
	})
	
	
