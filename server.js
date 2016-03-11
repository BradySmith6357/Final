// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var breweryDb = require('brewerydb-node')
var passport = require('passport')
var session = require('express-session')
var request = require('request')
var logout = require('express-passport-logout')
var brewdb = new breweryDb ('9f9f7b837c0caed1a2d0375ae7c185f3')

var passportConfig = require('./config/passport.js')

// Create Express App Object \\
var app = express();

mongoose.connect('mongodb://localhost/brewAtlas')

// *** Express Session Setup *** //

app.sessionMiddleware = session({
	secret: 'just a secret',
	resave: false,
	saveUninitialized: true
})

app.use(app.sessionMiddleware)
// *** End Express Session Setup *** //

// *** Passport hook in for app *** //
app.use(passport.initialize());
app.use(passport.session());

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/views'));


var middleware = {
	bouncer : function(req, res, next){
		if(req.isAuthenticated()){
			next()
		}
		else {
			res.send('go home')
		}
	}
}

//Controllers
var userCtrl = require('./controllers/userController.js')

// Passport hooks into our app
app.use(passport.initialize());
app.use(passport.session());

// Routes \\

app.get('/', function(req, res){
  res.sendFile('homepage.html', {root : './views/html'})
});

app.get('/me', function(req, res){
    res.send({user : req.user})
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

app.get('/checklogin',function(req,res){
  if (req.user) {
    res.send(true);
  }else{
    res.send(false);
    }
});


//Get beer from BreweryDB with brewerydb-node
app.post("/api/findBeer", function(req, res){
	brewdb.beer.find({name: req.body.name}, function(err, beers){
		console.log(beers)
		res.send(beers)
	})
});

//Get beer from BreweryDB and add it to local DB
// app.post('/api/findBeer', function (req, res){
// 	brewdb.beer.find({beerId: req.body.id}, function(err, beer){
// 	beer.forEach(function(beer){
// 		if(!beer){
// 		var addBeer = {
// 			beerId: beer.beerId,
// 			name: beer.name,
// 			hops: [],
// 			malt: [],
// 			yeast: "",
// 			abv: beer.abv,
// 			ibu: beer.ibu,
// 			style: beer.style,
// 			brewery: "",
// 			instructions: ""
// 		}
// 	res.send(beer)
// 	( new Beer(addBeer) ).save()
// 	}
// 	})
// 	})
// });

app.post("/api/findBrewery", function(req, res){
	brewdb.breweries.find({name: req.body.name}, function(err, breweries){
		console.log(breweries)
		res.send(breweries)
	})
})

//Search local db for beer


// Custom Beers //
var customBeerList = []

app.get("/api/customBeers", function(req, res){
	res.send(customBeerList)
})

app.post("/api/customBeers", function(req, res){
	customBeerList.push({
		name: req.body.name,
		style: req.body.style,
		malt: req.body.malt,
		hops: req.body.hops,
		special: req.body.special,
		yeast: req.body.yeast
	})
	res.send(customBeerList)
	console.log(customBeerList)
})

// Completed Beers //
var userCompletedList = []

app.get("/api/completedBeers", function(req, res){
	res.send(userCompletedList)
})

app.post("/api/completedBeers", function(req, res, beer){
	userCompletedList.push(beer)
	res.send(userCompletedList)
	console.log(userCompletedList)
})

// Wishlist Beers //
var userWishlist = []

app.get("/api/wishlistBeers", function(req, res){
	res.send(userWishlist)
})

app.post("/api/wishlistBeers", function(req, res){
	userWishlist.push(beer)
	res.send(userWishlist)
	console.log(userWishlist)
})

//POST
app.post('/signup', userCtrl.userSignup)
app.post('/login', userCtrl.userLogin)

// GET


// LOGOUT
app.get('/logout', function(req, res){
	req.logout()
	res.redirect('/')
})



// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})