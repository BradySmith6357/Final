var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var db = require('../models/userModel.js');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    db.user.findById(id, function(err, user) {
        done(err, user);
    });
});


var bcrypt = require('bcryptjs')
passport.use(new LocalStrategy(
    function(username, password, done) {
        db.user.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false);
            }
            bcrypt.compare(password, user.password, function(error, response){
                if (response === true){
                    return done(null, user)
                }
                else {
                    return done(null, false)
                }
            })
        });
    }
));
