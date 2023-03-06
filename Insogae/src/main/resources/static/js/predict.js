const ondo2 = document.getElementById('ondo-gp-1');
const do2 = document.getElementById('do-gp-1');
const ph2 = document.getElementById('ph-gp-1');
const salt2 = document.getElementById('salt-gp-1');
const content2 = document.getElementById('report-view-1');
let data = "온도";

$('.report').on('click',function(){
	content2.style.display = 'block';
	console.log(data)
	
	let testArray = $('.rectangle-value');
	console.log(testArray);
	
	for(let i=0;i<testArray.lenght;i++){
		if(testArray[i].innerText==data){
		console.log("testDAta "+ testArray[i].innerText)
			testArray[i].style.display='none'
		}
	}
	
});
$('#imgtag').on('click',function(){
	content2.style.display = 'none';
	console.log(data)
	
	let testArray = $('.rectangle-value');
	console.log(testArray)
	for(let i=0;i<testArray.lenght;i++){
		if(testArray[i].innerText==data){
		console.log("testDAta "+ testArray[i].innerText)
			testArray[i].style.display='block'
		}
		
	}
	
});


$('.rectangle-value').on('click',function(){
	data = $(this).text();
	console.log(data)
	
	if(data=='온도'){
		ondo2.style.display = 'block';
  		do2.style.display = 'none';
  		ph2.style.display = 'none';
  		salt2.style.display = 'none';
	}
	else if(data=='ph'){
		ondo2.style.display = 'none';
  		do2.style.display = 'none';
  		ph2.style.display = 'block';
  		salt2.style.display = 'none';
	}
	else if(data=='do'){
		ondo2.style.display = 'none';
  		do2.style.display = 'block';
  		ph2.style.display = 'none';
  		salt2.style.display = 'none';
	}
	else if(data=='염분'){
		ondo2.style.display = 'none';
  		do2.style.display = 'none';
  		ph2.style.display = 'none';
  		salt2.style.display = 'block';
	}
});


function showReport1(){
    // 토글 할 버튼 선택 (btn1)
  const content1 = document.getElementById('report-view-1');
  const ondo1 = document.getElementById('ondo-gp-1');
  const do1 = document.getElementById('do-gp-1');
  const ph1 = document.getElementById('ph-gp-1');
  const salt1 = document.getElementById('salt-gp-1');
  content1.style.display = 'block';
  ondo1.style.display = 'none';
  do1.style.display = 'none';
  ph1.style.display = 'none';
  salt1.style.display = 'none';
}
function hideReport1(){
  const content1 = document.getElementById('report-view-1');
  const ondo1 = document.getElementById('ondo-gp-1');
  content1.style.display = 'none';
  ondo1.style.display = 'block';
}

function showDo1(){
	const content1 = document.getElementById('report-view-1');
	const do1 = document.getElementById('do-gp-1');
	const ondo1 = document.getElementById('do-gp-1');
	const ph1 = document.getElementById('ph-gp-1');
	const salt1 = document.getElementById('salt-gp-1');
	do1.style.display='block';
	ondo1.style.display='none';
	ph1.style.display='none';
	salt1.style.display='none';
	content1.style.display = 'none';
}
function showReport2(){
    // 토글 할 버튼 선택 (btn1)
  const content1 = document.getElementById('report-view-2');
  content1.style.display = 'block';
}
function hideReport2(){
  const content1 = document.getElementById('report-view-2');
  content1.style.display = 'none';
}


function showReport3(){
      // 토글 할 버튼 선택 (btn1)
    const content1 = document.getElementById('report-view-3');
    content1.style.display = 'block';
}
function hideReport3(){
    const content1 = document.getElementById('report-view-3');
    content1.style.display = 'none';
}


function showReport4(){
    // 토글 할 버튼 선택 (btn1)
  const content1 = document.getElementById('report-view-4');
  content1.style.display = 'block';
}
function hideReport4(){
  const content1 = document.getElementById('report-view-4');
  content1.style.display = 'none';
}

function showReport5(){
  // 토글 할 버튼 선택 (btn1)
const content1 = document.getElementById('report-view-5');
content1.style.display = 'block';
}
function hideReport5(){
const content1 = document.getElementById('report-view-5');
content1.style.display = 'none';
}

function showReport6(){
  // 토글 할 버튼 선택 (btn1)
const content1 = document.getElementById('report-view-6');
content1.style.display = 'block';
}
function hideReport6(){
const content1 = document.getElementById('report-view-6');
content1.style.display = 'none';
}

function showReport7(){
  // 토글 할 버튼 선택 (btn1)
const content1 = document.getElementById('report-view-7');
content1.style.display = 'block';
}
function hideReport7(){
const content1 = document.getElementById('report-view-7');
content1.style.display = 'none';
}

function showReport8(){
  // 토글 할 버튼 선택 (btn1)
const content1 = document.getElementById('report-view-8');
content1.style.display = 'block';
}
function hideReport8(){
const content1 = document.getElementById('report-view-8');
content1.style.display = 'none';
}





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
    