function initMap() {

  var minZoomLevel = 5

  // *********Specify features and elements to define styles.***********
  var styleArray = [
    {
      featureType: "all",
      stylers: [
       { saturation: -50 },
      ]
    },{
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        { hue: "#243834" },
        { saturation: 50 }
      ]
    },{
      featureType: "road.business",
      elementType: "labels",
      stylers: [
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {visibility: "simplified"}
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        {visibility: "simplified"}
      ]
    }
  ];

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37, lng: -97},
    scrollwheel: false,
    // **********Apply the map style array to the map.***********
    styles: styleArray,
    zoom: minZoomLevel,
    // *********The mapTypeId sets the style between HYBRID, SATELLITE, ROADMAP, or TERRAIN*********
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });
    // ***********This tilts map 45 degrees*************
    map.setTilt(45)
// *****************Add Custom Image To Marker*************
var image = {
  url: "https://irp-cdn.multiscreensite.com/f9babea6/dms3rep/multi/desktop/Icon_beer-500x500.png",
  size: new google.maps.Size(50, 50),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(17, 34),
  scaledSize: new google.maps.Size(40, 40)
};
// ********Add marker at clicked location************
//     google.maps.event.addListener(map, 'click', function(event) {
//     placeMarker(event.latLng);
//     });

//     function placeMarker(location) {
//       var marker = new google.maps.Marker({
//         position: location,
//         animation: google.maps.Animation.DROP, 
//         map: map,
//         icon: image
//     });
// }

// ************* Place a marker at a Specific Location ********************
  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 39.744996, lng: -104.991875},
    icon: image
  });
  marker.addListener('click', toggleBounce);
// ***************** Animate a Marker ********************
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
  // ******************** Adding a Tooltip to a Marker **********************
var contentString = "This is the city of Denver!";

var infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

// ************************* Limits Maximum Zoom *********************
   google.maps.event.addListener(map, 'zoom_changed', function() {
     if (map.getZoom() < minZoomLevel) map.setZoom(minZoomLevel);
   });
 }

// ************************* Creates Search Bar **********************

//   // Create the search box and link it to the UI element.
//   var input = document.getElementById('pac-input');
//   var searchBox = new google.maps.places.SearchBox(input);
//   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

//   // Bias the SearchBox results towards current map's viewport.
//   map.addListener('bounds_changed', function() {
//     searchBox.setBounds(map.getBounds());
//   });
// }


