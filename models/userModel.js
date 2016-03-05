var mongoose = require("mongoose");
var passportConfig = require("../config/passport.js")

var userSchema = mongoose.Schema({
	username : {type : String, required: true, unique : true},
	password: {type : String, required:true},
	email: {type : String, required:true},
	photo: {type : Boolean}
})

module.exports = mongoose.model('User', userSchema)