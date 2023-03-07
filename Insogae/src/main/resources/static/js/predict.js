let num = 8; // 수조 개수 설정

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

for (let i = 1; i <= num; i++) {
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
	$(reportArray[i]).on('click', function () {
		$(contentArray[i]).show();
		let tempArray = $(rectangleArray[i]);
		let tempArray2 = $(valueArray[i]);
		console.log(tempArray);
		console.log(tempArray2);
		for (let j = 0; j < 4; j++) {
			if (tempArray2[j].innerText == dataArray[i]) {
				document.getElementById(tempArray[j].id).style.display = "none";
			}
		}
	});
}

for (let i = 0; i < num; i++) {
	$(imgtagArray[i]).on('click', function () {
		$(contentArray[i]).hide();
		let tempArray = $(rectangleArray[i]);
		let tempArray2 = $(valueArray[i]);
		for (let j = 0; j < 4; j++) {
			if (tempArray2[j].innerText == dataArray[i]) {
				console.log(tempArray[j]);
				document.getElementById(tempArray[j].id).style.display = "block";
			}
		}
	});
}

for (let i = 0; i < num; i++) {
	$(valueArray[i]).on('click', function () {
		dataArray[i] = $(this).text();
		console.log(dataArray[i])

		if (dataArray[i] == '온도') {
			$(ondoArray[i]).show();
			$(doArray[i]).hide();
			$(phArray[i]).hide();
			$(saltArray[i]).hide();
			$(contentArray[i]).hide();
		}
		else if (dataArray[i] == 'pH') {
			$(ondoArray[i]).hide();
			$(doArray[i]).hide();
			$(phArray[i]).show();
			$(saltArray[i]).hide();
			$(contentArray[i]).hide();
		} else if (dataArray[i] == 'DO') {
			$(ondoArray[i]).hide();
			$(doArray[i]).show();
			$(phArray[i]).hide();
			$(saltArray[i]).hide();
			$(contentArray[i]).hide();
		}
		else if (dataArray[i] == '염분') {
			$(ondoArray[i]).hide();
			$(doArray[i]).hide();
			$(phArray[i]).hide();
			$(saltArray[i]).show();
			$(contentArray[i]).hide();
		}
	});
}


const myButton = document.getElementById("next-page");
myButton.addEventListener('click', e => {
	document.getElementById("container").scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "end" });
});

const myButton2 = document.getElementById("before-page");
myButton2.addEventListener('click', e => {
	document.getElementById("container").scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "start" });
});



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