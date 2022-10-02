//global modules
require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const mongoose = require('mongoose');


//express
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//Ccontrollers
app.use('/places', require('./controllers/places'));


//home
app.get('/', (req, res)=> {
    res.render('home');
})
//error
app.get('*', (req, res) => {
    res.render('error404');
})

app.listen(process.env.PORT, function () {
    console.log('listening on Port 3001');
})