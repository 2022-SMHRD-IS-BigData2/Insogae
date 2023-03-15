function initMap() {
        // 지도 생성
        const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: { lat: 35.1595454, lng: 126.8526012 } // 광주
        });

        // 마커 데이터
        const markerData = [
          {
            name: '완주 수조',
            lat: 35.9855015,
            lng: 127.2620517,
            description: '완주 수조 입니다. 수조는 총 4개 있습니다'
          },
          {
            name: '전주 수조',
            lat: 35.8262965,
            lng: 127.0656925,
            description: '전주 수조 입니다. 수조는 총 3개 있습니다'
          },
          {
            name: '진도 수조',
            lat: 34.5029352,
            lng: 126.3694397,
            description: '진도 수조 입니다. 수조는 총 1개 있습니다.'
          }
        ];

        // 마커 생성
        markerData.forEach(marker => {
          const position = { lat: marker.lat, lng: marker.lng };
          const mapMarker = new google.maps.Marker({
            position: position,
            map: map,
            title: marker.name,
          });

          // 마커 클릭 이벤트 리스너 등록
          mapMarker.addListener('click', () => {
            // 정보창 생성
            const infoWindow = new google.maps.InfoWindow({
              content: `<h3 style = "color:black">${marker.name}</h3><p style = "color:black">${marker.description}</p>`
            });

            // 정보창 열기
            infoWindow.open(map, mapMarker);
          });
        });
      }