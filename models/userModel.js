var mongoose = require("mongoose");

var customSchema = mongoose.Schema({
	name: {type: String},
	style: {type: String},
	malt: {type: String},
	hops: {type: String},
	special: {type: String},
	yeast: {type: String},
	directions: {type: String}
})

var userSchema = mongoose.Schema({
	username : {type : String, required: true, unique : true},
	password: {type : String, required:true},
	email: {type : String, required:true},
	userimage: {type: String},
	wishlist: [{type : mongoose.Schema.Types.ObjectId, ref: "Beer"}], 
	// completed: [{type : mongoose.Schema.Types.ObjectId, ref: "Beer"}],
	completed: [{
		beer: {type : mongoose.Schema.Types.ObjectId, ref: "Beer"},
		notes: {type: String}
	}],
	badges: {type: Array},
	custom: [customSchema]
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
	brewery: {type: String},
	city: {type: String},
	state: {type: String},
	notes: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
	instructions: {type: String}
})

var brewerySchema = mongoose.Schema({
	name: {type: String},
	state: {type: String},
	city: {type: String},
	location: {type: String},
	beers: {type: mongoose.Schema.Types.ObjectId, ref: "Beer"}
})



module.exports = {user: mongoose.model('User', userSchema), beer: mongoose.model('Beer', beerSchema), brewery: mongoose.model('Brewery', brewerySchema), custom: mongoose.model('Custom', customSchema)}