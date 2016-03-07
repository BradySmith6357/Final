var User = require('../models/userModel.js');
var bcrypt = require('bcryptjs')
var passport = require('passport')

function userSignup (req, res){
	bcrypt.genSalt(10, function(err, salt){
	bcrypt.hash(req.body.password, salt, function(hashError, hash){
		var newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: hash,
			photo: req.body.photo,
		});
		newUser.save(function(saveErr, user){
			if ( saveErr ) {res.send({ err:saveErr }) }
				else {
					req.login(user, function(loginErr){
						if ( loginErr ) { res.send({ err:loginErr }) }
						else { res.send({success: 'success'}) }
					})
				}
		})
	})
	})
}

function userLogin (req, res, next){
	passport.authenticate('local', function(err, user, info){
		if (err) { return next(err); }
		if (!user) { return res.send({error : 'something went wrong'}); }
		req.logIn(user, function(err){
			if (err) { return next(err); }
			return res.send({success: 'success'});
		});
	})(req, res, next);
}

module.exports = {
	userSignup : userSignup,
	userLogin : userLogin
}