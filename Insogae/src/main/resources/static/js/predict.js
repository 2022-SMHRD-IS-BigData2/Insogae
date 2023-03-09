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

const chartArray = []

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
	$(ondoArray[i]).show();
	$(doArray[i]).hide();
	$(phArray[i]).hide();
	$(saltArray[i]).hide();
	$(contentArray[i]).hide();
	
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
         
         console.log($(ondoArray[i]))
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
myButton.addEventListener('click', () => {
   document.getElementById("container").scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "end" });
});

const myButton2 = document.getElementById("before-page");
myButton2.addEventListener('click', () => {
   document.getElementById("container").scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "start" });
});


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
/*chartList = [];
for (let i = 0; i<num; i++){

    $.ajax({
      url : "tank"+(i+1)+"data",
      success : function(res) {
       var count=0;
       	console.log(res)
           setInterval(() => {
             console.log(res[count].temp)
             console.log(res[count].do)
             console.log(res[count].ph)
             console.log(res[count].salt)
             time_data = res[count].record_DATE.split('T')[1].split('.')[0]
             do_data = res[count].do.toFixed(2);
             ph_data = res[count].ph.toFixed(2);
             temp_data = res[count].temp.toFixed(2);
             salt_data = res[count].salt.toFixed(2);
          
             $(ondoArray[i]).html("")
             $(doArray[i]).html("")
             $(saltArray[i]).html("")
             $(phArray[i]).html("")
             
             let do_do = `<h5>`+do_data+`ppm</h5>`;
             let ph=`<h5>`+ph_data+`ph</h5>`;
             let temp=`<h5>`+temp_data+`°C</h5>`;
             let salt=`<h5>`+salt_data+`psu</h5>`;
             $(ondoArray[i]).append(temp);
             $(doArray[i]).append(do_do);
             $(saltArray[i]).append(salt);
             $(phArray[i]).append(ph);
             	count++;
         }, 3000);

let labels = [];
           const data0 = {
             labels: labels,
             datasets: [{
               label: '온도',
               data: [],
               fill: false,
               backgroundColor: [],
               borderColor: [],
               tension: 0.1,
               borderWidth: 1
             }]
           };


const data1 = {
             labels: labels,
             datasets: [{
               label: 'DO',
               data: [],
               fill: false,
               backgroundColor: [],
               borderColor: [],
               tension: 0.1,
               borderWidth: 1
             }]
           };


const data2 = {
             labels: labels,
             datasets: [{
               label: 'pH',
               data: [],
               fill: false,
               backgroundColor: [],
               borderColor: [],
               tension: 0.1,
               borderWidth: 1
             }]
           };


const data3 = {
             labels: labels,
             datasets: [{
               label: '염분',
               data: [],
               fill: false,
               backgroundColor: [],
               borderColor: [],
               tension: 0.1,
               borderWidth: 1
             }]
           };
           

           let hiddenLabel = [];
           let config0 = {
             type: 'line',
             data: data0,
             options: {
               scales: {
                 x: {
                   tick: {
                     display: false,
                     callback: function(label, index, labels) {
                       return hiddenLabel;
                     }
                   }
                 }
               }
             }
           };

           let config1 = {
             type: 'line',
             data: data1,
             options: {
               scales: {
                 x: {
                   tick: {
                     display: false,
                     callback: function(label, index, labels) {
                       return hiddenLabel;
                     }
                   }
                 }
               }
             }
           };


           let config2 = {
             type: 'line',
             data: data2,
             options: {
               scales: {
                 x: {
                   tick: {
                     display: false,
                     callback: function(label, index, labels) {
                       return hiddenLabel;
                     }
                   }
                 }
               }
             }
           };


           let config3 = {
             type: 'line',
             data: data3,
             options: {
               scales: {
                 x: {
                   tick: {
                     display: false,
                     callback: function(label, index, labels) {
                       return hiddenLabel;
                     }
                   }
                 }
               }
             }
           };
           
           let chart_ondo = new Chart(
           document.getElementById(ondoArray[i]),
           config0
           );
           console.log(chart_ondo);
           console.log(chartList);
           let chart_do = new Chart(
           document.getElementById(doArray[i]),
           config1
           );
           let chart_ph = new Chart(
           document.getElementById(phArray[i]),
           config2
           );
           let chart_salt = new Chart(
           document.getElementById(saltArray[i]),
           config3
           );
           
           chartList.push(chart_ondo);
           chartList.push(chart_do);
           chartList.push(chart_ph);
           chartList.push(chart_salt);
           
           setInterval(()=> {
           hiddenLabel.push("");
         
           if (data0.datasets[0].data.length > 12){
           labels.shift();
           data0.datasets[0].data.shift();
           data0.datasets[0].backgroundColor.shift();
           data0.datasets[0].borderColor.shift();

           data1.datasets[0].data.shift();
           data1.datasets[0].backgroundColor.shift();
           data1.datasets[0].borderColor.shift();

           data2.datasets[0].data.shift();
           data2.datasets[0].backgroundColor.shift();
           data2.datasets[0].borderColor.shift();

           data3.datasets[0].data.shift();
           data3.datasets[0].backgroundColor.shift();
           data3.datasets[0].borderColor.shift();

           }
           labels.push(time_data);
           data0.datasets[0].data.push(res[count].temp);
           data0.datasets[0].backgroundColor.push(3 >=res[count].temp ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
           data0.datasets[0].borderColor.push(3 >= res[count].temp ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
          
           data1.datasets[0].data.push(res[count].do);
           data1.datasets[0].backgroundColor.push(3 >=res[count].do ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
           data1.datasets[0].borderColor.push(3 >= res[count].do ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');

           data2.datasets[0].data.push(res[count].ph);
           data2.datasets[0].backgroundColor.push(3 >=res[count].ph ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
           data2.datasets[0].borderColor.push(3 >= res[count].ph ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');   

           data3.datasets[0].data.push(res[count].salt);
           data3.datasets[0].backgroundColor.push(3 >=res[count].salt ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
           data3.datasets[0].borderColor.push(3 >= res[count].salt ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
           
           
           count++;
           }, 3000);  
           
      },
      error : function(){
        console.log('요청실패');
      }
    });
};*/