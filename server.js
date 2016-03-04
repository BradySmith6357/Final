// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var breweryDb = require('brewerydb-node')
// var brewdb = require('APIKEY')
// Create Express App Object \\
var app = express();

mongoose.connect('mongodb://localhost/heroes-of-ajax')

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/views'));

// Routes \\
app.get('/', function(req, res){
  res.sendFile('homepage.html', {root : './views/html'})
});

app.get('/beerlibrary', function(req, res){
  res.sendFile('beerlibrary.html', {root : './views/html'})
});

app.get('/beermap', function(req, res){
  res.sendFile('beerMap.html', {root : './views/html'})
});

app.get('/brewingtools', function(req, res){
  res.sendFile('brewingtools.html', {root : './views/html'})
});

app.get('/activeuser', function(req, res){
  res.sendFile('activeuser.html', {root : './views/html'})
});

app.get('/signup', function(req, res){
  res.sendFile('signup.html', {root : './views/html'})
});



// GET




// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})