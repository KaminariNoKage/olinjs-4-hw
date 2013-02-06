$(document).ready(function(){
		$("#submit").click(function(){
			var newmess = $("#newtweet").val();
			console.log($("#newtweet").val());
			if (newmess.length > 140) {
				alert("Your message is more than 140 characters.");
			}
			else {
				$.post("/tweets/user", {newtweet: $("#newtweet").val()});
			};
			return false;
		});

	

	var refreshindex = function(){
		$.get('/tweets', function(html){
			$('#tweetlist').replaceWith(html);
		});
	};

	//setInterval(refreshindex, 2000);


});