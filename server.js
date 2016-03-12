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
var beers = require('./models/userModel.js').beer
var user = require('./models/userModel.js').user

mongoose.connect('mongodb://localhost/brewAtlas')
var passportConfig = require('./config/passport.js')

// Create Express App Object \\
var app = express();



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
	// console.log("REQUEST:", req)
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
  if(req.user){
  res.sendFile('activeuser.html', {root : './views/html'})
} else {
	res.sendFile('homepage.html', {root : './views/html'})
}
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

// GET BEERS FROM MONGODB
app.post('/api/beerLibrary', function(req, res){
	beers.find({}, function(err, array){
		if (err) {
			console.log('no beer! Error:', err)
			res.send({err:err})
		} else {
		res.send(array)
		}
	})
})

// GET CUSTOMBEERS FROM MONGODB
app.post('/api/customBeers', function(req, res){
	beers.find({}, function(err, array){
		if(err) {
			console.log('no custom beers!')
			res.send({err:err})
		} else {
			res.send(array)
		}
	})
})

//Get styles from BreweryDB
app.post('/api/styles', function(req, res){
	brewdb.style.all(function(err, array){
		if (err) {
			console.log('no styles found! Error:', err)
			res.send({err:err})
		} else {
			res.send(array)
		}
	})
})

//Get hops from BreweryDB
// app.post('/api/hops', function(req, res){
// 	brewdb.hop.all(function(err, array){
// 		if (err) {
// 			console.log('no hops found! Error:', err)
// 		} else {
// 			res.send(array)
// 		}
// 	})
// })

//Get beer from BreweryDB with brewerydb-node
app.post('/api/findBeer', function(req, res){
	brewdb.beer.find({name: req.body.name}, function(err, beers){
		console.log(beers)
		res.send(beers)
	})
});

//Get beer from BreweryDB and add it to local DB
// app.post('/api/findBeer', function (req, res){
// 	brewdb.beer.find({beerId: req.body.id}, function(err, beer){
// 		beer.forEach(function(beer){
// 			if(!beer){
// 			var addBeer = {
// 				beerId: beer.beerId,
// 				name: beer.name,
// 				hops: [],
// 				malt: [],
// 				yeast: "",
// 				abv: beer.abv,
// 				ibu: beer.ibu,
// 				style: beer.style,
// 				brewery: "",
// 				instructions: ""
// 			}
// 		res.send(beer)
// 		( new Beer(addBeer) ).save()
// 		}
// 		})
// 	})
// });

//Search By Brewery
app.post('/api/findBrewery', function(req, res){
	brewdb.breweries.find({name: req.body.name}, function(err, breweries){
		console.log(breweries)
		res.send(breweries)
	})
})

//Search local db for beer


// Custom Beers //
app.get('/api/customBeers', function(req, res){
	res.send({_id: {$in: req.custom}}, function(err, docs){
		console.log("Line 199 Error:", err)
		res.send(docs)
	})
})

app.post('/api/customBeers', function(req, res){
	console.log("Line: 202", req.body)
	req.custom.push({
		name: req.body.name,
		style: req.body.style,
		malt: req.body.malt,
		hops: req.body.hops,
		special: req.body.special,
		yeast: req.body.yeast
	})
	res.send({success: "success"})
})

// Completed Beers //
app.get('/api/completedBeers', function(req, res){
	beers.find({_id: {$in: req.user.completed}},function(err, docs){
		// console.log("Line 215:", err, docs)
		res.send(docs)
	})
})

app.post('/api/completedBeers', function(req, res){
	// console.log("221:", req.body)
	// console.log("222:", req.user)
	user.find({_id: req.user._id}, function(err, docs){
		// console.log("Error:", err, docs)
		docs[0].completed.push(req.body._id)
		docs[0].save(function(err){
			// console.log("Line 227:", err)
		})
	})
	res.send({success: "success"})
})



// Wishlist Beers //

app.get('/api/wishlistBeers', function(req, res){
	beers.find({_id: {$in: req.user.completed}},function(err, docs){
		// console.log("Line: 239", err, docs)
		res.send(docs)
	})
})

app.post('/api/wishlistBeers', function(req, res){
	user.find({_id: req.user._id}, function(err, docs){
		// console.log("Line: 246", err, docs)
		docs[0].completed.push(req.body._id)
		docs[0].save(function(err){
			// console.log("Line: 249", err)
		})
	})
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