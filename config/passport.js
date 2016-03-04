var passport = require('passport')
var passportConfig = require('.config/passportConfig')


// *** Express Session Setup *** //
var session = require('express-session')
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

// Application Config //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ exteended: true }));
app.use(express.static(__dirname + '/views'));

var middleware = {
	auth : function(req, res, next){
		if(req.isAuthenticated()){
			next()
		} else {
			res.send('Try again!')
		}
	}
}

//Controllers
var userCtrl = require('.controllers/userController.js')

app.post('/signup', userCtrl.userSignup)
app.post('/login', userCtrl.userLogin)


// passport.use(new LocalStrategy(
// 	function(username, password, done){
// 		User.findOne({ username: username }, function (err, user){
// 			if (err) { return done(err); }
// 			if (!user) {
// 				return done(null, false, { message: 'Incorrect username or password.' });
// 			}
// 			if (!user.validPassword(password)) {
// 				return done(null, false, { message: 'Incorrect username or password.' });
// 			}
// 			return done(null, user);
// 		});
//   	}
// ));


// app.post('/login',
// 	passport.authenticate('local', {
// 		successRedirect: '/activeuser' + req.user.username,
// 		failureRedirect: '/signup',
// 		failureFlash: true,
// 	}
// ));

