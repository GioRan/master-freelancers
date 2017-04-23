window.index = {
	initializeIndex: function(){
		$("body").html("<div id='home' align=center></div>");
		$("#home").html("<div id='header'></div><div id='contentClass'></div></br><div id='contentExample'></div>")
		$("#header").html("<h2 class='ui icon header'>" +
							"<i class='book icon'></i>" +
							"<div class='content'>Master Freelancers Tutorial Ground " +
								"<div class='sub header'>" +
									"If you want to go back here, reload the page" +
								"</div>" +
							"</div>" +	
						"</h2>");
		$("#contentClass").html("<button class='massive ui button' onclick='php.initializePhp()'>" +
								"PHP" +
							"</button>" +
							"<button class='massive ui button' onclick='js.initializeJs()'>" +
								"Javascript" +
							"</button>" +
							"<button class='massive ui button' onclick='jquery.initializeJquery()'>" +
								"JQuery" +
							"</button>");
		$("#contentExample").html("<button class='massive ui button' onclick='login.initializeLogIn()'>" +
								"Login Example" +
							"</button>");
	}
}