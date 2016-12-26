;(function(){
	"use strict";

	window.onload = function(){

        var start = {lat: 49.592552, lng: 34.547128},
        	mapDiv = document.querySelector('.ba-map'); 

        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;

        // GET POLTAVA INFO BEFORE MAP INIT (FOR LINE: 24)
        // var poltavaInfo = document.querySelector('.ba-poltava-info'); 
        // poltavaInfo = poltavaInfo.innerHTML;

        var officeMap = new google.maps.Map(mapDiv, {
        	zoom: 3,
          	center: start
        });

        directionsDisplay.setMap(officeMap);

        var onClickHandler = function() {
            calculateAndDisplayRoute(directionsService, directionsDisplay);
        };

        document.querySelector('.ba-button').addEventListener('click', onClickHandler);
      
        function calculateAndDisplayRoute(directionsService, directionsDisplay) {
                  directionsService.route({
                  origin: document.querySelector('.ba-start').value,
                  destination: document.querySelector('.ba-end').value,
                  travelMode: google.maps.TravelMode.DRIVING
                }, function(response, status) {
                  if (status === google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                  } else {
                    window.alert('Directions request failed due to ' + status);
                  }
                });
              }

      }
 
      


})();
