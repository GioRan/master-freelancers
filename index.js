window.index = {
	initializeIndex: function(){
		$("body").html("<div id='home' align=center></div>");
		$("#home").html("<div id='header'></div><div id='content'></div>")
		$("#header").html("<h2 class='ui icon header'>" +
							"<i class='book icon'></i>" +
							"<div class='content'>Master Freelancers Tutorial Ground </div>" +	
						"</h2>");
		$("#content").html("<button class='massive ui button' onclick='php.initializePhp()'>" +
								"PHP" +
							"</button>" +
							"<button class='massive ui button' onclick='js.initializeJs()'>" +
								"Javascript" +
							"</button>" +
							"<button class='massive ui button' onclick='jquery.initializeJquery()'>" +
								"JQuery" +
							"</button>");
	}
}