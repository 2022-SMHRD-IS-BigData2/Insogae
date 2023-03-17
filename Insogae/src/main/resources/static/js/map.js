
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
      description: ['수조위치:  '+res[0].location, '수조의 개수: '+res[0].count, '사육개시일: 2021-07-13', '온도: 28°C']
    },
    {
      name: '한농대 수조',
      lat: 35.8262965,
      lng: 127.0656925,
      description: ['수조위치:  '+res[1].location, '수조의 개수: '+res[1].count, '사육개시일: 2021-07-13', '온도: 31°C']
    },
    {
      name: '어가 수조',
      lat: 34.5029352,
      lng: 126.3694397,
      description: ['수조위치:  '+res[2].location, '수조의 개수: '+res[2].count, '사육개시일: 2021-07-13', '온도: 28°C']
    },
		{
      name: 'SD-tech',
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
      icon: marker.name ==='SD-tech' ? newIcon : myIcon, // 회사 데이터만 다른 이미지로 설정
    });



    // 마커 클릭 이벤트 리스너 등록
    mapMarker.addListener('click', () => {
      // 정보창 생성
      const infoWindow = new google.maps.InfoWindow();
      let content = `<h6 style = "color:black">${marker.name}</h6><br>`;
      marker.description.forEach(desc => {
   if (desc.includes('사이트바로가기')) {
    content += `<h8 style = "color:black"> ${desc.replace('사이트바로가기', '<a href="http://sd-tech.kr/">사이트 이동하기</a>')}</h8><br>`;


  }else{
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