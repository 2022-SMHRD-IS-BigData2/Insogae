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
