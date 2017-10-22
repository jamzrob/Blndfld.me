const client_id = "JYapbqi3iPPitJR6PHifGN0To2qhsPUi";
const client_secret = "2XAi582Dcd0O0lbD-8j6F99r3lCpm3_DbTe43Q4Q";
const sandbox = true;
let base_url = ""
if(sandbox){
    base_url = "https://sandbox-api.uber.com/v1.2"
}else{
    base_url = "https://api.uber.com/v1.2"
}

function getHeader(){
    return {
        "Authorization": "Bearer "+getToken(),
        "Content-Type": "application/json"
    };
}

// Redirect user to login page
function loginWithUber(){
    let loginURL = "https://login.uber.com/oauth/v2/authorize?client_id=JYapbqi3iPPitJR6PHifGN0To2qhsPUi&response_type=code";
    window.location.href = loginURL;
}

// Get locally stored token
function getToken(){
    return localStorage.uberToken;
}

// Get token from Uber from auth_code
function fetchToken(auth_code, callback){
    let url = "https://login.uber.com/oauth/v2/token?client_id="+client_id
                +"&client_secret="+client_secret+"&grant_type=authorization_code&redirect_uri=https://crossorigin.me/http://blndfld.me&code=" + auth_code;
    fetch(url,{
        method: "POST"
    }).then(response => response.json()).then(json => callback(json));
}

// Get user data
function getUserData(callback){
    var url = base_url+"/me";
    var token = token;
    fetch(url, {
        method: "GET",
        headers: getHeader()
    }).then(response => response.json()).then(json => callback(json));
}

// Get ride estimate
function getRideEstimate(start_lat, start_long, end_lat, end_long, callback){
    var b = {
        "start_latitude": start_lat,
        "start_longitude": start_long,
        "end_latitude": end_lat,
        "end_longitude": end_long
    }
    console.log(JSON.stringify(b));

    var url = base_url+"/requests/estimate";

    fetch(url,{
        method: "POST",
        headers: getHeader(),
        body: JSON.stringify(b)
    }).then(response => response.json()).then(json=> callback(json));
}

// Schedule Ride
function requestRide(fare_id, start_lat, start_long, end_lat, end_long, callback){
    var body = {
        "fare_id": fare_id,
        "start_latitude": start_lat,
        "start_longitude": start_long,
        "end_latitude": end_lat,
        "end_longitude": end_long
    }

    var url = base_url+"/requests";

    fetch(url,{
        method: "POST",
        headers: getHeader(),
        body: JSON.stringify(body)
    }).then(response => response.json()).then(json=> callback(json));
}

function getCurrentRide(callback){
    let url = base_url+"/requests/current";
    fetch(url, {
        method: "GET",
        headers: getHeader()
    }).then(response => response.json()).then(json=>callback(json));
}

function deleteRequest(id){
    let url = base_url+"/requests/"+id
    fetch(url,{
        method: "DELETE",
        headers: getHeader()
    })
}

function cancelCurrentRide(){
    getCurrentRide(data => {
        if(data.request_id){
            deleteRequest(data.request_id)
        }
    })
}