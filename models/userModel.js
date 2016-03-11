var mongoose = require("mongoose");
var passportConfig = require("../config/passport.js")

var userSchema = mongoose.Schema({
	username : {type : String, required: true, unique : true},
	password: {type : String, required:true},
	email: {type : String, required:true},
	wishlist: [{type : mongoose.Schema.Types.ObjectId, ref: "Beer"}], 
	completed: [{type : mongoose.Schema.Types.ObjectId, ref: "Beer"}],
	badges: {type: Array},
	custom: {type: Array}
})

var beerSchema = mongoose.Schema({
	brewdbId: {type: String},
	name: {type: String},
	hops: {type: Array},
	malts: {type: Array},
	special: {type: String},
	yeast: {type: String},
	abv: {type: Number},
	ibu: {type: Number},
	style: {type: String},
	image: {type: String},
	brewery: {type: mongoose.Schema.Types.ObjectId, ref: "Brewery"},
	instructions: {type: String}
})

var brewerySchema = mongoose.Schema({
	name: {type: String},
	state: {type: String},
	city: {type: String},
	location: {type: String},
	beers: {type: mongoose.Schema.Types.ObjectId, ref: "Beer"}
})

module.exports = {user: mongoose.model('User', userSchema), beer: mongoose.model('Beer', beerSchema)}