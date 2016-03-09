var mongoose = require("mongoose");
var passportConfig = require("../config/passport.js")

var userSchema = mongoose.Schema({
	username : {type : String, required: true, unique : true},
	password: {type : String, required:true},
	email: {type : String, required:true},
	// wishlist: [{type : mongoose.schema.Objectid, ref: "Beer"}], 
	// completed: [{type : mongoose.schema.Objectid, ref: "Beer"}],
	custom: {type: Array}
})

var beerSchema = mongoose.Schema({
	name: {type: String},
	hops: {type: Array},
	malts: {type: Array},
	yeast: {type: String},
	instructions: {type: String}
})

module.exports = {user: mongoose.model('User', userSchema), beer: mongoose.model('Beer', beerSchema)}