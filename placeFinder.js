var randNum = 0;
function getPlace(rad, price, kind, keywrd, startingLat, startingLong, b)
{   
    getRandom(rad, price, kind, keywrd, startingLat, startingLong);
    var place;
    var loc = new google.maps.LatLng(startingLat,startingLong);
    var service = new google.maps.places.PlacesService(document.createElement('div'));
    service.nearbySearch({
                location:loc,
                radius:rad,
                type:[kind],
                keyword:keywrd,
                maxPriceLevel:price},
                function(data) {
                    console.log(data);
                    place = [data[randNum].geometry.location.lat(), data[randNum].geometry.location.lng()];
                    b(place);
                });
}
function returnFunc(a)
{
    console.log(a)
    return a;
}
function getNumChoices(rad, price, keywrd, kind, startingLat, startingLong, b)
{   
    var num;
    var loc = new google.maps.LatLng(startingLat,startingLong);
    var service = new google.maps.places.PlacesService(document.createElement('div'));
    service.nearbySearch({
                location:loc,
                radius:rad,
                type:[kind],
                keyword:keywrd,
                maxPriceLevel:price},
                function(data) {
                    num = data.length;
                    b(num);
                });
}
function getRandom(rad, price, kind, keywrd, startingLat, startingLong)
{
    //500,4,'pizza','restaurant',36.144703,-86.801820
    getNumChoices(rad, price, kind, keywrd, startingLat, startingLong, function(place){returnRandFunc(place);});
    console.log(randNum)
}
function returnRandFunc(a)
{
    randNum = (Math.floor(Math.random()*Math.floor(a*.3)));
}