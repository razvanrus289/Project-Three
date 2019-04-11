var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 42.047778, lng: -87.756829},
    zoom: 10
  });
}

google.maps.addDomListener(window, 'load', initMap());
