
 function initMap() {

$.ajax({
	url : 'location_data',
	data : {
		COMPANY_ID : user
	},
	success : function(res){
		
		
		  // 초기화 함수    
   
  // 지도 생성
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: { lat: 35.1595454, lng: 126.8526012 } // 광주
  });

  // 마커 데이터
  const markerData = [
    {
      name: '수산기술연구소 수조',
      lat: 35.9855015,
      lng: 127.2620517,
      description: ['수조위치1:  '+res[0].location, '수조의 개수: '+res[0].count, '사육개시일: 2021-07-13', '온도: 28°C']
    },
    {
      name: '한농대 수조',
      lat: 35.8262965,
      lng: 127.0656925,
      description: ['수조위치2:  '+res[1].location, '수조의 개수: '+res[1].count, '사육개시일: 2021-07-13', '온도: 31°C']
    },
    {
      name: '어가 수조',
      lat: 34.5029352,
      lng: 126.3694397,
      description: ['수조위치3:  '+res[2].location, '수조의 개수: '+res[2].count, '사육개시일: 2021-07-13', '온도: 28°C']
    },
		{
      name: '주식회사 에스디테크',
      lat: 35.2275945,
      lng: 126.8393882,
      description: ['회사 번호:  062-416-5345',
					'회사 위치: 광주 북구 첨단과기로 123, 광주과학기술원 창업진흥센터 A-104호 ',
					'사이트바로가기']
    }
 	
  ];



  var myIcon = new google.maps.MarkerImage("./img/sh3.png", null, null, null, new google.maps.Size(50,50));//새우
  var newIcon = new google.maps.MarkerImage("./img/sd-tech.png", null, null, null, new google.maps.Size(100,50));//에스디 태크
  // 마커 생성
  markerData.forEach(marker => {
    const position = { lat: marker.lat, lng: marker.lng };
    const mapMarker = new google.maps.Marker({
      position: position,
      map: map,
      title: marker.name,
      icon: marker.name ==='주식회사 에스디테크' ? newIcon : myIcon, // 회사 데이터만 다른 이미지로 설정
    });



    // 마커 클릭 이벤트 리스너 등록
    mapMarker.addListener('click', () => {
      // 정보창 생성
      const infoWindow = new google.maps.InfoWindow();
      let content = `<h6 style = "color:black">${marker.name}</h6><br>`;
      marker.description.forEach(desc => {
   if (desc.includes('사이트바로가기')) {
    content += `<h8 style = "color:black"> ${desc.replace('사이트바로가기', '<a href="http://sd-tech.kr/">사이트 이동</a>')}</h8><br>`;
		console.log("에스디 테크 안녕?")
		 $("#subtable").hide();
		 $("#maintable").show();
	

  }
	else if(desc.includes('수조위치1:  ')){
		console.log("완주 수조 안녕?")
		$.ajax({
		url : "mapdata1",//어디로?
		type : "get",// get? or post?
		data : {
			
		},
		success : function(res){
			// 성공하면 실행되는 함수
			console.log(res)
			 $("#maintable").hide();
			 $("#subtable").show();
			
				$("#mapdata1").html("")
				$("#mapdata2").html("")
				$("#mapdata3").html("")
				$("#mapdata4").html("")
				$("#mapdata5").html("")
				$("#mapdata6").html("")
				$("#mapdata7").html("")
				$("#mapdata8").html("")
				$("#mapdata9").html("")
				$("#mapdata10").html("")
				$("#mapdata11").html("")
				$("#mapdata12").html("")
				$("#mapdata13").html("")
				$("#mapdata14").html("")
				$("#mapdata15").html("")
				$("#mapdata16").html("")
				$("#mapdata17").html("")
				$("#mapdata18").html("")
				$("#mapdata19").html("")
				$("#mapdata20").html("")
				$("#mapdata21").html("")
				$("#mapdata22").html("")
				$("#mapdata23").html("")
				$("#mapdata24").html("")
				$("#mapdata25").html("")
				$("#mapdata26").html("")
				$("#mapdata27").html("")
				$("#mapdata28").html("")
				
				
				
				$("#mapdata1").append(res[0].tank_ID)
				$("#mapdata2").append(res[0].height)
				$("#mapdata3").append(res[0].diameter)
				$("#mapdata4").append(res[0].variety)
				$("#mapdata5").append(res[0].init_POP)
				$("#mapdata6").append(res[0].init_DENSITY)
				$("#mapdata7").append(res[0].start_TEMP)
				
				$("#mapdata8").append(res[1].tank_ID)
				$("#mapdata9").append(res[1].height)
				$("#mapdata10").append(res[1].diameter)
				$("#mapdata11").append(res[1].variety)
				$("#mapdata12").append(res[1].init_POP)
				$("#mapdata13").append(res[1].init_DENSITY)
				$("#mapdata14").append(res[1].start_TEMP)
				
				$("#mapdata15").append(res[2].tank_ID)
				$("#mapdata16").append(res[2].height)
				$("#mapdata17").append(res[2].diameter)
				$("#mapdata18").append(res[2].variety)
				$("#mapdata19").append(res[2].init_POP)
				$("#mapdata20").append(res[2].init_DENSITY)
				$("#mapdata21").append(res[2].start_TEMP)
				
				$("#mapdata22").append(res[3].tank_ID)
				$("#mapdata23").append(res[3].height)
				$("#mapdata24").append(res[3].diameter)
				$("#mapdata25").append(res[3].variety)
				$("#mapdata26").append(res[3].init_POP)
				$("#mapdata27").append(res[3].init_DENSITY)
				$("#mapdata28").append(res[3].start_TEMP)
			
			
			
		},
		error : function(){
			alert("에러ㅋ");
		}
	});
		
		
		
		
		
		
		
}
	else if(desc.includes('수조위치2:  ')){
		console.log("전주 수조 안녕?")
		
		$.ajax({
		url : "mapdata2",//어디로?
		type : "get",// get? or post?
		data : {
			
		},
		success : function(res){
			// 성공하면 실행되는 함수
			console.log(res)
			$("#subtable").show();
				 $("#maintable").hide();
			
			$("#mapdata1").html("")
				$("#mapdata2").html("")
				$("#mapdata3").html("")
				$("#mapdata4").html("")
				$("#mapdata5").html("")
				$("#mapdata6").html("")
				$("#mapdata7").html("")
				$("#mapdata8").html("")
				$("#mapdata9").html("")
				$("#mapdata10").html("")
				$("#mapdata11").html("")
				$("#mapdata12").html("")
				$("#mapdata13").html("")
				$("#mapdata14").html("")
				$("#mapdata15").html("")
				$("#mapdata16").html("")
				$("#mapdata17").html("")
				$("#mapdata18").html("")
				$("#mapdata19").html("")
				$("#mapdata20").html("")
				$("#mapdata21").html("")
				$("#mapdata22").html("")
				$("#mapdata23").html("")
				$("#mapdata24").html("")
				$("#mapdata25").html("")
				$("#mapdata26").html("")
				$("#mapdata27").html("")
				$("#mapdata28").html("")
			
			
			
				$("#mapdata1").append(res[0].tank_ID)
				$("#mapdata2").append(res[0].height)
				$("#mapdata3").append(res[0].diameter)
				$("#mapdata4").append(res[0].variety)
				$("#mapdata5").append(res[0].init_POP)
				$("#mapdata6").append(res[0].init_DENSITY)
				$("#mapdata7").append(res[0].start_TEMP)
				
				$("#mapdata8").append(res[1].tank_ID)
				$("#mapdata9").append(res[1].height)
				$("#mapdata10").append(res[1].diameter)
				$("#mapdata11").append(res[1].variety)
				$("#mapdata12").append(res[1].init_POP)
				$("#mapdata13").append(res[1].init_DENSITY)
				$("#mapdata14").append(res[1].start_TEMP)
				
				$("#mapdata15").append(res[2].tank_ID)
				$("#mapdata16").append(res[2].height)
				$("#mapdata17").append(res[2].diameter)
				$("#mapdata18").append(res[2].variety)
				$("#mapdata19").append(res[2].init_POP)
				$("#mapdata20").append(res[2].init_DENSITY)
				$("#mapdata21").append(res[2].start_TEMP)

			
			
		},
		error : function(){
			alert("에러ㅋ");
		}
	});
		
		
		
		
		
}
	else if(desc.includes('수조위치3:  ')){
		console.log("진도 수조 안녕?")
		
		$.ajax({
		url : "mapdata3",//어디로?
		type : "get",// get? or post?
		data : {
			
		},
		success : function(res){
			// 성공하면 실행되는 함수
			console.log(res)
			$("#subtable").show();
			 $("#maintable").hide();
		
		$("#mapdata1").html("")
				$("#mapdata2").html("")
				$("#mapdata3").html("")
				$("#mapdata4").html("")
				$("#mapdata5").html("")
				$("#mapdata6").html("")
				$("#mapdata7").html("")
				$("#mapdata8").html("")
				$("#mapdata9").html("")
				$("#mapdata10").html("")
				$("#mapdata11").html("")
				$("#mapdata12").html("")
				$("#mapdata13").html("")
				$("#mapdata14").html("")
				$("#mapdata15").html("")
				$("#mapdata16").html("")
				$("#mapdata17").html("")
				$("#mapdata18").html("")
				$("#mapdata19").html("")
				$("#mapdata20").html("")
				$("#mapdata21").html("")
				$("#mapdata22").html("")
				$("#mapdata23").html("")
				$("#mapdata24").html("")
				$("#mapdata25").html("")
				$("#mapdata26").html("")
				$("#mapdata27").html("")
				$("#mapdata28").html("")
		
		
			
				$("#mapdata1").append(res[0].tank_ID)
				$("#mapdata2").append(res[0].height)
				$("#mapdata3").append(res[0].diameter)
				$("#mapdata4").append(res[0].variety)
				$("#mapdata5").append(res[0].init_POP)
				$("#mapdata6").append(res[0].init_DENSITY)
				$("#mapdata7").append(res[0].start_TEMP)
			
			
		},
		error : function(){
			alert("에러ㅋ");
		}
	});
		
		
		
		

}


else{
        content += `<h8 style = "color:black">${desc}</h8><br>`
}
		

      });
  
    
      infoWindow.setContent(content);

      // 정보창 열기
      infoWindow.open(map, mapMarker);
    });
  });

	},
	error : function(){
		console.log('error!');
	}
})
}