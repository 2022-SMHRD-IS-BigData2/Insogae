  // 초기화 함수    
      function initMap() {
  // 지도 생성
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: { lat: 35.1595454, lng: 126.8526012 } // 광주
  });

  // 마커 데이터
  const markerData = [
    {
      name: '수산기술연구소 4개 수조',
      lat: 35.9855015,
      lng: 127.2620517,
      description: ['수조위치: 전북 완주군 고산면 대아저수로 410-25', '품종: 흰다리 새우', '사육개시일: 2021-07-13', '온도: 28°C']
    },
    {
      name: '한농대 3개 수조',
      lat: 35.8262965,
      lng: 127.0656925,
      description: ['수조위치: 전북 전주시 덕진구 콩쥐팥쥐로 1515', '품종: 흰다리새우', '사육개시일: 2021-07-13', '온도: 31°C']
    },
    {
      name: '어가 1개 수조',
      lat: 34.5029352,
      lng: 126.3694397,
      description: ['수조위치: 전남 진도군 고군면 동부해안로 427', '품종: 흰다리새우', '사육개시일: 2021-07-13', '온도: 28°C']
    }
  ];

  var myIcon = new google.maps.MarkerImage("./img/sh3.png", null, null, null, new google.maps.Size(50,50));

  // 마커 생성
  markerData.forEach(marker => {
    const position = { lat: marker.lat, lng: marker.lng };
    const mapMarker = new google.maps.Marker({
      position: position,
      map: map,
      title: marker.name,
      icon:myIcon,
    });

    // 마커 클릭 이벤트 리스너 등록
    mapMarker.addListener('click', () => {
      // 정보창 생성
      const infoWindow = new google.maps.InfoWindow();
      let content = `<h6 style = "color:black">${marker.name}</h6><br>`;
      marker.description.forEach(desc => {
        content += `<h8 style = "color:black">${desc}</h8><br>`
      });
  
    
      infoWindow.setContent(content);

      // 정보창 열기
      infoWindow.open(map, mapMarker);
    });
  });
}







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
    }
  ];

  var myIcon = new google.maps.MarkerImage("./img/sh3.png", null, null, null, new google.maps.Size(50,50));

  // 마커 생성
  markerData.forEach(marker => {
    const position = { lat: marker.lat, lng: marker.lng };
    const mapMarker = new google.maps.Marker({
      position: position,
      map: map,
      title: marker.name,
      icon:myIcon,
    });

    // 마커 클릭 이벤트 리스너 등록
    mapMarker.addListener('click', () => {
      // 정보창 생성
      const infoWindow = new google.maps.InfoWindow();
      let content = `<h6 style = "color:black">${marker.name}</h6><br>`;
      marker.description.forEach(desc => {
        content += `<h8 style = "color:black">${desc}</h8><br>`
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