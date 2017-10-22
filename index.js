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

app.listen(80);