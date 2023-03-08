

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const gwanju = { lat: 35.1595454, lng: 126.8526012 }; // lat: 위도 lng:경도
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: gwanju,
    });

    const malls = [
        {label:"Tank1",name:"수조1",lat:35.9855015,lng:127.2620517},
        {label:"Tank2",name:"수조2",lat:35.8262965,lng:127.0656925},
        {label:"Tank3",name:"수조3",lat:34.5029352,lng:126.3694397}
    ];
    
    const bounds = new google.maps.LatLngBounds();
    const infoWindow = new google.maps.InfoWindow();
  
    malls.forEach(({ label, name, lat, lng }) => {
      const marker = new google.maps.Marker({
        position: { lat, lng },
        label,
        map
      });
      bounds.extend(marker.position);
  
      marker.addListener("click", () => {
        map.panTo(marker.position);
        infoWindow.setContent(name);
        infoWindow.open({
          anchor: marker,
          map
        });
      });
    });
  
    map.fitBounds(bounds);
  };


  window.initMap = initMap;

  