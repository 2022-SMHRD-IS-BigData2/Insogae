let num = 8; // 수조 개수 설정

// 각 class 및 id 선택자를 담을 배열 설정
const valueArray = []       //  ('.value-' + i)   
const reportArray = []      //  ('#report-' + i) 
const ondoArray = []        //  ('#ondo-gp-' + i)      온도 그래프  
const doArray = []          //  ('#do-gp-' + i)        DO   그래프   
const phArray = []          //  ('#ph-gp-' + i)        PH  그래프
const saltArray = []        //  ('#salt-gp-' + i)      염도 그래프
const contentArray = []     //  ('#report-view-' + i)  리포트 
const rectangleArray = []   //  ('.rectangle-gp' + i)  
const imgtagArray = []      //  ('#imgtag-' + i)       수조별 리포트 닫기창
const ondoAccArray = []     //  ('#ondo-acc-'+i)       온도 실제값  
const doAccArray = []       //  ('#do-acc-'+i)         DO 실제값
const phAccArray = []       //  ('#ph-acc-'+i)         PH 실제값
const saltAccArray = []     //  ('#salt-acc-'+i)       염도 실제값
const ondoPreArray = []     //  ('#ondo-pre-'+i)       온도 예측값
const doPreArray = []       //  ('#do-pre-'+i)         DO 예측값
const phPreArray = []       //  ('#ph-pre-'+i)         PH 예측값
const saltPreArray = []     //  ('#salt-pre-'+i)       염도 예측값
let dataArray = []          //  ('현재 온도') 

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
   dataArray.push('현재 온도');
   ondoAccArray.push('#ondo-acc-'+i);
   doAccArray.push('#do-acc-'+i);
   phAccArray.push('#ph-acc-'+i);
   saltAccArray.push('#salt-acc-'+i);
   ondoPreArray.push('#ondo-pre-'+i);
   doPreArray.push('#do-pre-'+i);
   phPreArray.push('#ph-pre-'+i);
   saltPreArray.push('#salt-pre-'+i);
}

// 리포트 클릭 -> 리포트 출력
for (let i = 0; i < num; i++) {
   $(reportArray[i]).on('click', function () {
      $(contentArray[i]).show();
      let tempArray = $(rectangleArray[i]);
      let tempArray2 = $(valueArray[i]);
      for (let j = 0; j < 4; j++) {
         if (tempArray2[j].childNodes[1].firstElementChild.innerHTML == dataArray[i]) {
            document.getElementById(tempArray[j].id).style.display = "none";
         }
      }
   });
}

// 닫기창 클릭 -> 리포트 닫기 
for (let i = 0; i < num; i++) {
   $(imgtagArray[i]).on('click', function () {
      $(contentArray[i]).hide();
      let tempArray = $(rectangleArray[i]);
      let tempArray2 = $(valueArray[i]);
      for (let j = 0; j < 4; j++) {
         if (tempArray2[j].childNodes[1].firstElementChild.innerHTML == dataArray[i]) {
            document.getElementById(tempArray[j].id).style.display = "block";
         }
      }
   });
}

// 그래프 화면 오른쪽 박스 클릭시 해당 그래프로 보여주기
for (let i = 0; i < num; i++) {
	$(ondoArray[i]).show();
	$(doArray[i]).hide();
	$(phArray[i]).hide();
	$(saltArray[i]).hide();
	$(contentArray[i]).hide();
	
	$(valueArray[i]).on('click', function () {
      dataArray[i] = $(this)[0].childNodes[1].childNodes[1].innerText;

      if (dataArray[i] == '현재 온도') {
         $(ondoArray[i]).show();
         $(doArray[i]).hide();
         $(phArray[i]).hide();
         $(saltArray[i]).hide();
         $(contentArray[i]).hide();
      }
      else if (dataArray[i] == '현재 pH') {
         
         $(ondoArray[i]).hide();
         $(doArray[i]).hide();
         $(phArray[i]).show();
         $(saltArray[i]).hide();
         $(contentArray[i]).hide();
      } else if (dataArray[i] == '현재 DO') {
         $(ondoArray[i]).hide();
         $(doArray[i]).show();
         $(phArray[i]).hide();
         $(saltArray[i]).hide();
         $(contentArray[i]).hide();
      }
      else if (dataArray[i] == '현재 염도') {
         $(ondoArray[i]).hide();
         $(doArray[i]).hide();
         $(phArray[i]).hide();
         $(saltArray[i]).show();
         $(contentArray[i]).hide();
      }
   });
}

// 다음 페이지 클릭
const myButton = document.getElementById("next-page");
myButton.addEventListener('click', () => {
   document.getElementById("container").scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "end" });
});

// 이전 페이지 클릭  
const myButton2 = document.getElementById("before-page");
myButton2.addEventListener('click', () => {
   document.getElementById("container").scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "start" });
});

// 현재 시간 출력
//function currentTime() {
//	const date = new Date();
//	let yyyy = date.getFullYear();
//	let MM = date.getMonth() + 1;
//	let dd = date.getDate();
//	let hh = date.getHours();
//	let mm = date.getMinutes();
//	let ss = date.getSeconds();
//	let session = "AM";
//
//	if (hh > 12) {
//		session = "PM";
//	}
//
//	hh = (hh < 10) ? "0" + hh : hh;
//	mm = (mm < 10) ? "0" + mm : mm;
//	ss = (ss < 10) ? "0" + ss : ss;
//
//	const time = yyyy + "년 " + MM + "월 " + dd + "일 " + session + " " + hh + ":" + mm;
//	
//	for(let i =0; i<$(".tctm").length;i++){
//		$(".tctm")[i].innerText = time;
//	};
//
//	setTimeout(() => currentTime(), 1000);
//};
//
//currentTime();