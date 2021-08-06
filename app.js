require('dotenv').config();
const express = require('express');
const app = express();
const ejs_mate = require('ejs-mate');
const ejs = require('ejs');
const path = require('path');
const axios = require('axios');
const mailjet = require('node-mailjet').connect(process.env.apiConnectFirstArg, process.env.apiConnectSecondArg)
const port = process.env.PORT || 3000;
const option = { headers: { accept: 'application/json' } };


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('ejs', ejs_mate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use('/css', express.static('css'));
app.use('/partials', express.static('partials'));
app.use('/scripts', express.static('scripts'))



app.get('/', (req, res) => {
    let response = {};
    res.render('home', { response });
})

app.get('/home', (req, res) => {
    let response = {};
    res.render('home', { response });
})



app.post('/reset', (req, res) => {
    res.redirect('/');
})

app.get('/sendEmail', (req, res) => {
    res.render('sendEmail');
})


app.post('/sendEmail', (req, res) => {
    console.log(req.body)
    axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.apiKey}`, option)
        .then((response) => {
            const request = mailjet
                .post("send", { 'version': 'v3.1' })
                .request({
                    "Messages": [{
                        "From": {
                            "Email": "ghernaoutmassi@gmail.com",
                            "Name": "Massi gy"
                        },
                        "To": [{
                            "Email": req.body.Email_address,
                            "Name": req.body.Username
                        }],
                        "Subject": "Vpn Test Resaults",
                        "TextPart": JSON.stringify(response.data),
                    }]
                })
            request
                .then((result) => {
                    res.send(result.body.Messages[0].Status)
                })
                .catch((err) => {
                    res.send(err.message)
                })
        })
        .catch(err => {
            res.send(err);
        })


})



app.listen(port, (req, res) => {
    console.log('server started on port ' + port);
})