var express = require('express');
var app = express();
// var router = express.Router();
var root = require('./routes/root');
var about = require('./routes/about');
var contact = require('./routes/contact');

app.locals.title = 'Lucas McDaniel';
app.set('view engine', 'ejs');

// app.get('/', function(req, res){
//   res.send('hello world');
// });

// app.get('/about', function(req, res){
//   res.send('ABout');
// });

// app.get('/')

// app.get('/contact', function(req, res){
//   res.send('Contact');
// });

// app.use('/', routes);
app.use('/', root)
app.use('/about', about);
app.use('/contact', contact);

app.use(express.static('public'));

app.listen(3000);
