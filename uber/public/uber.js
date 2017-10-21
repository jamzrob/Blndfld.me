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
function fetchToken(auth_code){
    return fetch("http://127.0.0.1/getToken/"+code).then(response => response.text()).then(
        text =>{
            localStorage.uberToken = JSON.parse(text).access_token;
            return localStorage.uberToken;
        }
    );
}

// Convience method ignore
function getProductID(products, product){
    for(p in products){
        if(p.display_name===product){
            return p.product_id;
        }
    }
    return null;
}

// Get list of availble products and their ids
function getProducts(token, long, lat){
    fetch("http://127.0.0.1/products"+token+"/"+lat+"/"+long).then(response => response.text()).then(
        text => {
            var products = JSON.parse(text).products;
            return {
                uberX: getProductID(products, "uberX"),
                uberSelect: getProductID(products, "uberSELECT"),
                uberBlack: getProductID(products, "uberBlack")
            }
        }
    )
}

// Get user data
function getUserData(){
    return fetch("http://127.0.0.1/me/"+getToken()).then(response => response.text()).then(
        text => {
            return JSON.parse(text);
        }
    );
}

// Get ride estimate
function getRideEstimate(start_lat, start_long, end_lat, end_long){
    return fetch("http://127.0.0.1/request/estimate/"+getToken()+"/"
                +start_lat+"/"+start_long+"/"
                +end_lat+"/"+end_long).then(response => response.text()).then(
        text => {
            return JSON.parse(text);
        }
    );
}

// Schedule Ride
function scheduleRide(fare_id, start_lat, start_long, end_lat, end_long){
    return fetch("http://127.0.0.1/request/"+getToken()+"/"
                +fare_id+"/"+start_lat+"/"+start_long+"/"
                +end_lat+"/"+end_long).then(response => response.text()).then(
        text => {
            return JSON.parse(text);
        }
    );
}