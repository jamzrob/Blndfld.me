function getPlace(rad, price, keywrd, startingLat, startingLong, b)
{   
    var place;
    var loc = new google.maps.LatLng(startingLat,startingLong);
    var service = new google.maps.places.PlacesService(document.createElement('div'));
    service.nearbySearch({
                location:loc,
                radius:rad,
                type:['restaurant'],
                keyword:keywrd},
                maxPriceLevel:price,
                function(data) {
                    console.log(data);
                    place = [data[0].geometry.location.lat(), data[0].geometry.location.lng()];
                    b(place);
                });
}
function dealWithPlace(a)
{
    console.log(a)
    return a;
}