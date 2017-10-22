var x = document.getElementById("demo");
var key = "AIzaSyDWjlAdP2BsE4D9mnOuxA-nLSS5akDmM10";
var myLatLng;
var zoomIndex = 17;
var map;
var marker;


function getLocation() {
    if (navigator.geolocation) {
        console.log("Finding location")
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}



function showPosition(position) {

    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var myLatLng = {lat: position.coords.latitude, lng: position.coords.longitude};

    localStorage.latitude = position.coords.latitude;
    localStorage.longitude = position.coords.longitude;
   
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: position.coords.latitude, lng: position.coords.longitude},
    zoom: zoomIndex
    });

    marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Your Location'
        });

    console.log("testing");
}
//To use this code on your website, get a free API key from Google.
//Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}