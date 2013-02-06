$(document).ready(function(){

	function checklog() {
		if ($("#compose").hasClass("true")){
			$('#logdisplay').hide();
		}
		else{
			$('#twitdisplay').hide();
		};
	};

	checklog();

	$("#login").click(function(){
		window.location = "/users/new";
		return false;
	});

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
});