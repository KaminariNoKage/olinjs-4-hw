
/*
 * GET home page.
 */

var Mods = require('../models/twit_model.js')
	, User = Mods[0]
	, Tweet = Mods[1];

exports.index = function(req, res){
  Tweet.find().sort('-time').exec(function(err, foundTwits) {
		if (req.session.user == null){
			res.render('index', {title: 'Tweets', logged: 'false', twits: foundTwits});
		}
		else{
			console.log("Here");
			res.render('index', {title: 'Tweets', logged: 'true', twits: foundTwits});
		};
  });
};