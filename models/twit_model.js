var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	// Somehow worked
});

var userSchema = mongoose.Schema({
	name: String
});

var tweetSchema = mongoose.Schema({
	authorname: String,
	authorid: String,
	time: Number,
	message: String
});

var User = mongoose.model('User', userSchema);
var Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = [User, Tweet];