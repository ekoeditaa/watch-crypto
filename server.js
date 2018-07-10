const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const Pusher = require('pusher');
const axios = require('axios');
var serveStatic = require('serve-static');


// Initialise Pusher
var pusher = new Pusher({
    appId: '549647',
    key: '4d4f8bafef41b5d280bd',
    secret: '41b98c51b7532b07d81e',
    cluster: 'ap1',
    encrypted: true
});

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    next()
});

app.use(serveStatic(__dirname + "/dist"));

// Routes
app.get('/', _ => res.send('Welcome'));

// Simulated Cron
setInterval(_ => {
    let url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD';

    axios.get(url).then(res => {
        pusher.trigger('price-updates', 'coin-updates', { coin: res.data })
    })
}, 5000)

// Start app
app.listen(8000, () => console.log('App running on port 8000!'));