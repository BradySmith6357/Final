// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
// Create Express App Object \\
var app = express();

mongoose.connect('mongodb://localhost/heroes-of-ajax')

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.sendFile('index.html', {root : './public/html'})
});

var heroesCtrl = require('./controllers/heroesCtrl.js')
var hqCtrl = require('./controllers/hqCtrl.js')

// GET




// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})