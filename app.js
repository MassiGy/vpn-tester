const express = require('express');
const app = express();
const ejs_mate = require('ejs-mate');
const ejs = require('ejs');
const path = require('path');
const port = process.env.PORT || 3000;


app.use(express.json());
app.engine('ejs', ejs_mate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use('/css', express.static('css'));
app.use('/partials', express.static('partials'));
app.use('/scripts', express.static('scripts'))



app.get('/', (req, res) => {
    res.render('home');
})

app.get('/home', (req, res) => {
    res.render('home');
})



app.listen(port, (req, res) => {
    console.log('server started on port ' + port);
})