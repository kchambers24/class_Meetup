var directionsDisplay = new google.maps.DirectionsRenderer;
var directionsService = new google.maps.DirectionsService;

function initMap(mapref, panelref, floatingref, startref, endref) {
  var map = new google.maps.Map(mapref, {
    zoom: 7,
    center: {lat: 28.5447246, lng:  -81.37842429999999}
  });
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(panelref);

  var control = floatingref;
  control.style.display = 'block';
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

  var onChangeHandler = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };
  startref.addEventListener('change', onChangeHandler);
  endref.addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(startref, endref) {
        var start = startref.value;
        var end = endref.value;
        directionsService.route({
          origin: startref,
          destination: endref,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }

export {initMap, calculateAndDisplayRoute};
