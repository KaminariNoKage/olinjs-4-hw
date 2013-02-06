$(document).ready(function(){
	
	var refreshindex = function(){
		$.get('/tweets', function(html){
			$('#tweetlist').replaceWith(html);
		});
	};

	setInterval(refreshindex, 2000);


});