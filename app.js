require('dotenv').config();
const express = require('express');
const app = express();
const ejs_mate = require('ejs-mate');
const ejs = require('ejs');
const path = require('path');
const axios = require('axios');
const option = { headers: { accept: 'application/json' } };
const port = process.env.PORT || 3000;



app.use(express.json())
app.engine('ejs', ejs_mate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use('/css', express.static('css'));


app.get('/', (req, res) => {
    let response = {};
    res.render('main', { response });
})


app.post('/test', (req, res) => {
    axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.apiKey}`, option)
        .then((response) => {
            res.render('main', { response })
        })
        .catch(err => {
            console.log(err.message);
        })

})

app.post('/reset', (req, res) => {
    res.redirect('/');
})


app.listen(port, (req, res) => {
    console.log('server started on port ' + port);
})