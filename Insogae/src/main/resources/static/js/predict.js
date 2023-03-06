/*const ondoArray[i] = document.getElementById('ondo-gp-1');
const doArray[i] = document.getElementById('do-gp-1');
const phArray[i] = document.getElementById('ph-gp-1');
const saltArray[i] = document.getElementById('salt-gp-1');
const contentArray[i] = document.getElementById('report-view-1');
let dataArray[i] = "온도";
const dataList = ['온도','DO','pH','염분']
const reportArray = ['#report-1','#report-2','#report-3','#report-4','#report-5','#report-6','#report-7','#report-8']
*/
let num = 8;

const valueArray = []
const reportArray = []
const ondoArray = []
const doArray = []
const phArray = []
const saltArray = []
const contentArray = []
const rectangleArray = []
const imgtagArray = []
let dataArray = []
for (let i = 1; i <= num; i++)  {
	valueArray.push('.value-' + i);
	reportArray.push('#report-' + i);
	ondoArray.push('#ondo-gp-' + i);
	doArray.push('#do-gp-' + i);
	phArray.push('#ph-gp-' + i);
	saltArray.push('#salt-gp-' + i);
	contentArray.push('#report-view-' + i);
	rectangleArray.push('.rectangle-gp-' + i);
	imgtagArray.push('#imgtag-' + i);
	dataArray.push('온도');
}
for (let i = 0; i < num; i++) {
	$(reportArray[i]).on('click', function() {
		$(contentArray[i]).show();
		let tempArray = $(rectangleArray[i]);
		let tempArray2 = $(valueArray[i]);
		console.log(tempArray);
		console.log(tempArray2);
		for (let j = 0;j<4;j++)  {
			if (tempArray2[j].innerText = dataArray[i])  {
				document.getElementById(tempArray[j].id).style.display="none";
			}
		}
	});
}
for (let i = 0; i < num; i++) {
	$(imgtagArray[i]).on('click', function(){
		$(contentArray[i]).hide();
		let tempArray = $(rectangleArray[i]);
		let tempArray2 = $(valueArray[i]);
		for (let j=0; j < 4; j++) {
			if (tempArray2[j].innerText  == dataArray[i]) {
				console.log(tempArray[j]);
				document.getElementById(tempArray[j].id).style.display="block";
			}
		}
	});
}

for(let i=0; i<num; i++){
$(valueArray[i]).on('click',  function() {
	dataArray[i] = $(this).text();
	console.log(dataArray[i])

	if (dataArray[i] ==  '온도') {
		$(ondoArray[i]).show();
		$(doArray[i]).hide();
		$(phArray[i]).hide();
		$(saltArray[i]).hide();
		$(contentArray[i]).hide();
	}
	else if (dataArray[i] ==  'pH') {
	$(ondoArray[i]).hide();
	$(doArray[i]).hide();
	$(phArray[i]).show();
	$(saltArray[i]).hide();
	$(contentArray[i]).hide();
}
else if  (dataArray[i] ==  'DO') {
	$(ondoArray[i]).hide();
	$(doArray[i]).show();
	$(phArray[i]).hide();
	$(saltArray[i]).hide();
	$(contentArray[i]).hide();
}
	else if  (dataArray[i]=='염분') {
	$(ondoArray[i]).hide();
	$(doArray[i]).hide();
	$(phArray[i]).hide();
	$(saltArray[i]).show();
	$(contentArray[i]).hide();
}
});
}
/*
const ondo2 = document.getElementById('ondo-gp-2');
const do2 = document.getElementById('do-gp-2');
const ph2 = document.getElementById('ph-gp-2');
const salt2 = document.getElementById('salt-gp-2');
const content2 = document.getElementById('report-view-2');
let data2 = "온도";
$(reportArray[1]).on('click',function(){
	content2.style.display = 'block';
	let tempArray = $('.rectangle-gp-2');
	let tempArray2 = $('.value-2');
	console.log(tempArray);
	
	for(let i=0;i<4;i++){
		if(tempArray2[i].innerText==data2){
		console.log(tempArray[i].id)
		document.getElementById(tempArray[i].id).style.display="none";
		}
	}
});
	
$('#imgtag-2').on('click',function(){
	content2.style.display = 'none';
	let tempArray = $('.rectangle-gp-2');
	let tempArray2 = $('.value-2');
	for(let i=0;i<4;i++){
		if(tempArray2[i].innerText==data2){
		document.getElementById(tempArray[i].id).style.display="block";
		}
	}
	
});
	
	
$('.value-2').on('click',function(){
	data2 = $(this).text();
	console.log(data2)
	
	if(data2=='온도'){
		ondo2.style.display = 'block';
			do2.style.display = 'none';
			ph2.style.display = 'none';
			salt2.style.display = 'none';
			content2.style.display = 'none';
	}
	else if(data2=='pH'){
		ondo2.style.display = 'none';
			do2.style.display = 'none';
			ph2.style.display = 'block';
			salt2.style.display = 'none';
			content2.style.display = 'none';
	}
	else if(data2=='DO'){
		ondo2.style.display = 'none';
			do2.style.display = 'block';
			ph2.style.display = 'none';
			salt2.style.display = 'none';
			content2.style.display = 'none';
	}
	else if(data2=='염분'){
		ondo2.style.display = 'none';
			do2.style.display = 'none';
			ph2.style.display = 'none';
			salt2.style.display = 'block';
			content2.style.display = 'none';
	}
});
	
*/

const myButton = document.getElementById("next-page");
myButton.addEventListener('click', e => {
	document.getElementById("container").scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "end" });
});

const myButton2 = document.getElementById("before-page");
myButton2.addEventListener('click', e => {
	document.getElementById("container").scrollIntoView({  behavior: 'smooth', block: "nearest", inline: "start" });
});
