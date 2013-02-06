
/*
 * GET users listing.
 */
 var Mods = require('../models/twit_model.js')
	, User = Mods[0]
	, Tweet = Mods[1];

exports.list = function(req, res){
	var userlist = User.find({}).sort('name').exec(function (err, docs) {
		if (err)
			return console.log("Error in User list");
		
		res.render('userlist', {userlist: docs, title: 'All Users'});
	});
};

//User LOGIN Page
exports.inputuser = function(req, res){
	res.render('login', {title: 'Login'});
};

exports.login = function(req, res){
	User.find({name: req.body.name}).exec(function(err, docs){
		if (docs[0] == null){
			var newuser = new User({name: req.body.name});
			newuser.save(function (err) {
			if (err)
				return console.log("Error: We couldn't save the new User");
			req.session.user = newuser;
			res.redirect('/');
			});
		}
		else {
			req.session.user = docs[0];
			res.redirect('/');
		};
	});
};

//Making and posting tweets
exports.newtweet = function(req, res){
	var authorid = req.session.user._id
		, authorname = req.session.user.name
		, message = req.body.newtweet
		, time = Date.now();
	var newtwit = Tweet({authorname: authorname, authorid: authorid, time: time, message: message});
	newtwit.save(function(err) {
		if (err)
			return console.log("Unable to save New Tweet", err);
		res.send('Success');
	});
};

exports.twitlist = function(req, res) {
	Tweet.find().sort('-time').exec(function(err, foundTwits) {
 		res.render('_twits', {twits: foundTwits});
	});
};