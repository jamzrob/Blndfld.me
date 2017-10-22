var randNum = 0;
var options = [];
var activityCoords = [0,0];
var restaurantName = '';
var restaurantCoords = [0,0];
var dessertCoords = [0,0];
//var day = [[0,0],[0,0],[0,0]];
//var types = ['art_gallery','bar','bowling_alley','cafe','movie_theater','museum','night_club','park','restaurant','shopping_mall'];
//var type = 0;
//var prevtype = 0;
function setOptions(price, kind, keywrd, startingLat, startingLong, b)
{   
    var loc = new google.maps.LatLng(startingLat,startingLong);
    var service = new google.maps.places.PlacesService(document.createElement('div'));
    service.nearbySearch({
                location:loc,
                radius:15000,
                type:[kind],
                keyword:keywrd,
                maxPriceLevel:price},
                function(data) {
                    b(data);
                });
}
function returnFunc(a)
{
    console.log(a)
    options = a;
}
function getActivity(price, type, keywrd, startingLat, startingLong)
{
    setOptions(price, type, keywrd, startingLat, startingLong, function(place){console.log(place);activityCoords = getPlaceCoords(place,getRandGeneral(place));console.log(activityCoords);});
}

 function saveResults() {
    var pr = document.getElementById("pricerange");
    localStorage.price = pr.value;



    var endtime = document.getElementById("endtimeclock");
    localStorage.time = endtime.value;


    var searchBox = document.getElementById("search");
    localStorage.search = search.value; 


    //gets the latitude and longitude values

    getRestaurant(localStorage.price, 
                    localStorage.search, 
                    localStorage.latitude, 
                    localStorage.longitude);

    console.log("called getRestaurant");


  }



function getRestaurant(price, keywrd, startingLat, startingLong)
{

    /*console.log(price);

    console.log(keywrd);

    console.log(startingLat);

    console.log(startingLong);*/

    setOptions(price, 'restaurant', keywrd, startingLat, startingLong, function(place){


        console.log(place);
        var num = getRandGeneral(place);
        restaurantName = place[num].name;
        console.log(restaurantName)
        restaurantCoords = getPlaceCoords(place,num);
        console.log(restaurantCoords);

    });

    /*setTimeout(printing, 1000);*/

    

}

var printing = function printResterauntCoords ()
{
    console.log(restaurantCoords);

};


function getDessert(price, startingLat, startingLong)
{

    setOptions(price, '', 'ice cream', startingLat, startingLong, function(place){console.log(place);dessertCoords = getPlaceCoords(place,getRandGeneral(place));console.log(dessertCoords);});
}
function getPlaceCoords(arr,num)
{
    return [arr[num].geometry.location.lat(), arr[num].geometry.location.lng()];
}
function getRandNum()
{
    return randNum;
}
function getRandGeneral(arr)
{
    return Math.floor(Math.random()*Math.floor(arr.length*.3));
}
function setRandNum()
{
    randNum = Math.floor(Math.random()*Math.floor(options.length*.3));
    console.log(randNum)
}
/*function planDay(price, startingLat, startingLong)
{
    type = Math.floor(Math.random()*types.length);
    setRandNum();
    setOptions(price, 'restaurant', 'pizza', startingLat, startingLong,function(place){
        console.log(place)
        day[0] = [place[randNum].geometry.location.lat(), place[randNum].geometry.location.lng()];
        setRandNum();
        prevtype = type;
        while (prevtype == type)
        {
            type = Math.floor(Math.random()*types.length);
        }
        setOptions(price, types[type], '', startingLat, startingLong,function(place){
            day[1] = [place[randNum].geometry.location.lat(), place[randNum].geometry.location.lng()];
            setRandNum();
            var prevprevtype = type;
            while (prevprevtype == type || prevtype == type)
            {
                type = Math.floor(Math.random()*types.length);
            }
            setOptions(price, types[type], '', startingLat, startingLong,function(place){
                day[2] = [place[randNum].geometry.location.lat(), place[randNum].geometry.location.lng()];
            });  
        });
    });
    console.log(day)
}*/