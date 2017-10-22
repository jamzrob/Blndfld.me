var randNum = 0;
var options = [];
var activityName = '';
var activityCoords = [0,0];
var restaurantName = '';
var restaurantCoords = [0,0];
var dessertName = '';
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
                    console.log("data="+data)
                    b(data);
                });
}
function returnFunc(a)
{
    console.log(a)
    options = a;
}

let places = [];
let count = 0;

function saveResults() {
    var times = document.getElementById("endtimeclock").value.split(":");
    localStorage.hour = parseInt(times[0]);
    localStorage.minute = parseInt(times[1]);

    var pr = document.getElementById("pricerange");
    localStorage.price = pr.value;

    var searchBox = document.getElementById("search");
    localStorage.search = search.value; 

    localStorage.placeCount = 0;
    localStorage.currentPlace = 0;

    //gets the latitude and longitude values
    getActivity(localStorage.price, 
                    localStorage.latitude, 
                    localStorage.longitude,true,0);
    getRestaurant(localStorage.price, 
                    localStorage.search, 
                    localStorage.latitude, 
                    localStorage.longitude,1);
    getDessert(localStorage.price, 
                    localStorage.latitude, 
                    localStorage.longitude,2);
    getActivity(localStorage.price, 
                    localStorage.latitude, 
                    localStorage.longitude,false,3);

    console.log("called getRestaurant");
}

function getActivity(price, startingLat, startingLong, free, i)
{
    var type = '';
    if (free)
    {
        type = 'park';
    }
    else
    {
        type = 'bar';
    }
    setOptions(price, type, '', startingLat, startingLong, function(place){
        console.log(place);
        var num = getRandGeneral(place);
        console.log("place "+place)
        console.log("num "+num)
        activityName = place[num].name;
        console.log(activityName)
        activityCoords = getPlaceCoords(place,num);
        console.log("ac cords"+activityCoords);
        let data = {latitude: activityCoords[0], longitude: activityCoords[1], name: activityName};
        places.push(data);
        count++;   
        if(count==4){
            pushArray()
        } 
    });
    
}

function getRestaurant(price, keywrd, startingLat, startingLong,i)
{
    setOptions(price, 'restaurant', keywrd, startingLat, startingLong, function(place){
        console.log(place);
        var num = getRandGeneral(place);
        restaurantName = place[num].name;
        console.log(restaurantName)
        restaurantCoords = getPlaceCoords(place,num);
        console.log(restaurantCoords);
        let data = {latitude: restaurantCoords[0], longitude: restaurantCoords[1], name: restaurantName};
        places.push(data);
        count++;   
        if(count==4){
            pushArray()
        } 
    });
    
}

function getDessert(price, startingLat, startingLong,i)
{
    setOptions(price, '', 'ice cream', startingLat, startingLong, function(place){
        console.log(place);
        var num = getRandGeneral(place);
        dessertName = place[num].name;
        console.log(dessertName)
        dessertCoords = getPlaceCoords(place,num);
        console.log(dessertCoords);
        let data = {latitude: dessertCoords[0], longitude: dessertCoords[1], name: dessertName};
        places.push(data);
        count++;   
        if(count==4){
            pushArray()
        }  
    });
}

function pushArray(){
    console.log("Saved array")
    localStorage.places = JSON.stringify(places);
    window.location.href = "http://127.0.0.1/plan";
}

var printing = function printResterauntCoords ()
{
    console.log(restaurantCoords);

};

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