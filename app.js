var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var root = require('./routes/root');
var about = require('./routes/about');
var contact = require('./routes/contact');

require('./lib/secrets');

app.set('view engine', 'ejs');

app.locals.title = 'Lucas McDaniel';

app.use(bodyParser.urlencoded({extended: true}));

app.use('/', root)
app.use('/about', about);
app.use('/contact', contact);



// app.use(express.static('public'));

app.listen(3000);
