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
		
		
	},
	error : function(){
		console.log('에러')
	}
});