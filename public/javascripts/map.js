var map;
function initialize() {
//   var latLng = new google.maps.LatLng(-40.685030, 73.978567);
var latLng = new google.maps.LatLng(40.715750, -73.937587);
  // Create a simple map.
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 12,
    center: latLng
  });
  
  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);


  var photos = [
  ['On the 4 near "161st Street – Yankee Stadium" station, Bronx', 40.826256, -73.926859, '/images/161-yankee.jpg', 'v'],
  ['2 Train near "Simpson St" station, Bronx', 40.824448, -73.892343, '/images/sub.jpg', 'h'],
/*
  ['Cronulla Beach', -34.028249, 151.157507, 3],
  ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
  ['Maroubra Beach', -33.950198, 151.259302, 1]
*/
];


for (var i = 0; i < photos.length; i++) {
    var photo = photos[i];
    var myLatLng = new google.maps.LatLng(photo[1], photo[2]);
    var size;
        
    if (photo[4] == 'h') {

      size = new google.maps.Size(240, 170)
    }

    if (photo[4] == 'v') {
      size = new google.maps.Size(170,240)
    }

    var image = {
    url: photo[3],
    scaledSize: size,
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0)
 }

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
        title: photo[0]
//         zIndex: beach[3]
    });
  }





  var contentString = '<div class="info">'+
  '<p>Long live the biscuitlordz</p>'+
  '</div>';
  
   
   var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

 
/*
  var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      icon: image
  });
*/



  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
  
// marker.setMap(map);

}

google.maps.event.addDomListener(window, 'load', initialize);
