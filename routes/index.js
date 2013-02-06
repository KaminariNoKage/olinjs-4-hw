
/*
 * GET home page.
 */

var Mods = require('../models/twit_model.js')
	, User = Mods[0]
	, Tweet = Mods[1];

exports.index = function(req, res){
  Tweet.find().sort('-time').exec(function(err, foundTwits) {
    res.render('index', {title: 'Tweets', twits: foundTwits});
  });
};