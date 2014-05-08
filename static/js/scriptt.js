$(document).ready(function(){

   var map = new google.maps.Map(document.getElementById('map-canvas'), {
   zoom: 8,
   center: new google.maps.LatLng(5.68, -1.0),
   //mapTypeId: google.maps.MapTypeId.ROADMAP
});
   $(function(){
   	$('#example').popover();
   	$('#tip').tooltip();
   });
   $('#tip').click(function(e){
   	e.preventDefault();
   	$('#rich').modal('show');
   });

   $('#but')
    .click(function () {
        var btn = $(this)
        btn.button('loading')
        setTimeout(function () {
            btn.button('reset')
        }, 3000)
    });
    
    



   










var map;
var markersArray = [];

function initMap()
{
    var latlng = new google.maps.LatLng(5.68, -0.10);

    var myOptions = {
        zoom: 10,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

    // add a click event handler to the map object
    google.maps.event.addListener(map, "click", function(event)
    {
        placeMarker(event.latLng);
        console.log(event.latLng.lat());
                console.log(event.latLng.lng());
         document.diddy.latitude.value = event.latLng.lat();
         document.diddy.longitude.value = event.latLng.lng();
    });




//placing the marker for the map
  function placeMarker(location) {
    // first remove all markers if there are any
    deleteOverlays();

    var marker = new google.maps.Marker({
        position: location,
        map: map
        //title: 'Click to zoom'
    });

    // add marker in markers array
    markersArray.push(marker);

    //map.setCenter(location);
  }

    // Deletes all markers in the array by removing references to them
    function deleteOverlays() {
        if (markersArray) {
            for (var i in markersArray) {
                markersArray[i].setMap(null);
            }
        markersArray.length = 0;
        }
    }
  }

google.maps.event.addDomListener(window, 'load', initMap);



});


