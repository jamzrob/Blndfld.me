const client_id = "JYapbqi3iPPitJR6PHifGN0To2qhsPUi";
const client_secret = "2XAi582Dcd0O0lbD-8j6F99r3lCpm3_DbTe43Q4Q";
const base_url = "https://sandbox-api.uber.com/v1.2"

const path = require("path");
const express = require("express");
const app = express();
var fetch = require('node-fetch');

function getHeader(token){
    return {
        "Authorization": "Bearer "+token,
        "Content-Type": "application/json"
    };
}

app.use(express.static(path.join(__dirname, "./public")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/app", (req, res) => {
    res.sendFile(path.join(__dirname, "main.html"));
});

app.get("/getToken/:code", (req, res) => {
    var url = "https://login.uber.com/oauth/v2/token?client_id="+client_id
            +"&client_secret="+client_secret+"&grant_type=authorization_code&redirect_uri=http://127.0.0.1&code=" + req.params.code;
    console.log(url);
    fetch(url, {
        method: "POST"
    }).then(result => result.text()).then(text =>{
        console.log(text);
        res.send(text);
    });
});

app.get("/me/:token", (req, res)=>{
    var url = base_url+"/me";
    var token = req.params.token;
    fetch(url, {
        method: "GET",
        headers: getHeader(token)
    }).then(response => response.text()).then(
        text => {
            console.log(text);
            res.send(text);
        }
    );
});

app.get("/request/estimate/:token/:start_lat/:start_long/:end_lat/:end_long", (req, res)=>{
    var token = req.params.token;
    
    var body = {
        "start_latitude": req.params.start_lat,
        "start_longitude": req.params.start_long,
        "end_latitude": req.params.end_lat,
        "end_longitude": req.params.end_long
    }

    var url = base_url+"/requests/estimate";

    fetch(url,{
        method: "POST",
        headers: getHeader(token),
        body: JSON.stringify(body)
    }).then(response => response.text()).then(
        text => {
            console.log(text);
            res.send(text);
        }
    );
});

app.get("/request/:token/:fare_id/:start_lat/:start_long/:end_lat/:end_long", (req, res)=>{
    var token = req.params.token;

    var body = {
        "fare_id": req.params.fare_id,
        "start_latitude": req.params.start_lat,
        "start_longitude": req.params.start_long,
        "end_latitude": req.params.end_lat,
        "end_longitude": req.params.end_long
    }

    var url = base_url+"/requests";

    fetch(url,{
        method: "POST",
        headers: getHeader(token),
        body: JSON.stringify(body)
    }).then(response => response.text()).then(
        text => {
            console.log(text);
            res.send(text);
        }
    );
});

app.get("/products/:token/:lat/:long", (req, res)=>{
    var url = base_url+"/products?latitude="+req.params.lat+"&longitude="+req.params.long;
    fetch(url, {
        method: "GET",
        headers: getHeader(req.params.token)
    }).then(response => response.text()).then(
        text => {
            console.log(text);
            res.send(text);
        }
    );
});

app.listen(80);