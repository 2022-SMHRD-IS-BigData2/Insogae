var user = $('#user-id').text();





/* 모니터링 날짜*/
/*function currentTime() {
    const date = new Date(); 
    let yyyy = date.getFullYear();
    let MM = date.getMonth()+1;
    let dd = date.getDate();

  
    const time = "[" +yyyy + "년 " + MM + "월 " + dd + "일]";
  
    document.getElementById("clock").innerText = time;
  
    setTimeout(() => currentTime(), 1000);
  }
  
  currentTime();
*/

/* 수질예측 날짜*/
/*
  function currentTime2() {
    const date2 = new Date(); 
    let yyyy = date2.getFullYear();
    let MM = date2.getMonth()+1;
    let dd = date2.getDate();

  
    const time2 = "[" +yyyy + "년 " + MM + "월 " + dd + "일]";
  
    document.getElementById("clock2").innerText = time2;
  
    setTimeout(() => currentTime2(), 1000);
  }
  
  currentTime2();*/

var user = $('#user-id').text();

$.ajax({
	url : 'testlist',
	data : {
		COMPANY_ID: user
	},
	success : function(res){
		console.log(res)
		
	


		var count=0;

			 
		// tbody 요소 선택
const tbody = document.querySelector('tbody');

// 데이터를 tbody에 추가
res.forEach(item => {
	
	alarm_time_data = res[count].alarm_DATE.split('.')[0]
	const new_alarm_time_date = alarm_time_data.replace(/(.{10})./, "$1/"); //시간데이터 문자열 변환

	    alarm_tank_id = res[count].tank_ID
	    alarm_content = parseFloat(res[count].alarm_CONTENT).toFixed(2)
		alarm_datatype = res[count].tank_DATA_TYPE	
  // tr 요소 생성
  const tr = document.createElement('tr');

  // td 요소 생성 및 데이터 할당
  const timeTd = document.createElement('td');
  timeTd.textContent = new_alarm_time_date;
  tr.appendChild(timeTd);

  const tankNameTd = document.createElement('td');
  tankNameTd.textContent = alarm_tank_id;
  tr.appendChild(tankNameTd);

  const contentTd = document.createElement('td');
  contentTd.textContent = alarm_content;
  tr.appendChild(contentTd);

  const datatypeTd = document.createElement('td');
  datatypeTd.textContent = alarm_datatype;
  tr.appendChild(datatypeTd);

  // tbody에 tr 추가
  tbody.appendChild(tr);
count++;
});
		
		
		
		
		
		/*$("#time").html("")
		$("#tank_name").html("")
		$("#content").html("")
		$("#datatype").html("")
		
		let time = `<h5>`+alarm_time_data+`</h5>`;
	    let tank_id=`<h5>`+alarm_tank_id+`</h5>`;
	    let content=`<h5>`+alarm_content+`</h5>`;
	    let datatype=`<h5>`+alarm_datatype+`</h5>`;
	     		
	     		
	            $('#time').append(time);
	            $('#tank_name').append(tank_id);
	            $('#content').append(content);
	            $('#datatype').append(datatype);
		*/
		
		
		
		
		
		
		
		
	},
	error : function(){
		console.log('에러')
	}
});