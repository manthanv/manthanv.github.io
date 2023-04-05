function initMap() {
  // Latitude and Longitude
  var myLatLng = { lat: 21.234871, lng: 72.870106 };

  var map = new google.maps.Map(document.getElementById("google-maps"), {
    zoom: 17,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Sumeru city mall", // Title Location
  });
}
