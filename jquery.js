window.jquery = {
	initializeJquery: function(){
		$("body").html("");
		$("body").append("<div id='sidebarContainer'>" +
								"<div id='sidebar' class='ui right sidebar visible inverted vertical menu'>" +
									"<a class='item' href='#jq1'>JQuery reference</a>" +
									"<a class='item' href='#jq2'>JQuery selector</a>" +
									"<a class='item' href='#jq3'>JQuery Events</a>" +
									"<a class='item' href='#jq4'>JQuery add and remove element</a>" +
									"<a class='item' href='#jq5'>JQuery add and remove class</a>" +
									"<a class='item' href='#jq6'>JQuery show and hide elements</a>" +
									"<a class='item' href='#jq7'>JQuery Ajax</a>" +
								"</div>" +
							"</div>" +
							"<div id='contentContainer' style='padding-right:19rem;' class='pusher'></div>");
		$("#contentContainer").html("<div id='jq1'></div><div id='jq2'></div><div id='jq3'></div><div id='jq4'></div><div id='jq5'></div><div id='jq6'></div><div id='jq7'></div>");
		window.jquery.jq1();
		window.jquery.jq2();
		window.jquery.jq3();
		window.jquery.jq4();
		window.jquery.jq5();
		window.jquery.jq6();
		window.jquery.jq7();
	},
	jq1: function(){
		$("#jq1").html("<h1 class='ui header'>JQuery reference</h1>" +
						"<div class='ui segment'>" +
							"<p> Before we can use Jquery, we have to reference it because it is a framework and it is not a native language that browsers support</p>" +
						"</div>" +
						"<div class='ui inverted segment'>" +
							"<p>Example:</br>< script src='yourPathHere/jquery-some-version.js'>< /script> //this is how we reference a js file, in this case we are referencing to jquery.js framework</p>" +
						"</div>");
	},
	jq2: function(){
		$("#jq2").html("<h1 class='ui header'>JQuery selector</h1>" +
						"<div class='ui segment'>" +
							"<p> JQuery selector always starts with '$()' dollar sign and a parenthesis. </p>" +
						"</div>" +
						"<div class='ui inverted segment'>" +
							"<p>Example:</br>< button id='someId' class='someClass'> click me< /button> //we create a button element with an id 'someId' and class 'someClass'</br></br>< script ></br>$('#someId') //it is more easy to get an element with jquery, if it is an id, we use '#' hashtag</br>$('.someClass') //if it is a class, we use '.' dot</br>$('button') //we can also select an element tag itself</br>< /script> </p>" +
						"</div>");
	},
	jq3: function(){
		$("#jq3").html("<h1 class='ui header'>JQuery Events</h1>" +
						"<div class='ui segment'>" +
							"<p> JQuery event like '.click'. This will trigger a user event with click. See more Jquery Events on <a href='https://www.w3schools.com/jquery/jquery_ref_events.asp' targe='_blank'>JQuery Events</a></p>" +
						"</div>" +
						"<div class='ui inverted segment'>" +
							"<p>Example:</br>< button id='someId'> click me< /button> //we create a button element with an id 'someId'</br></br>< script ></br>$('#someId').click(function(){ //we use a selector for the button element so we can attach a click event</br>&nbsp&nbsp&nbsp&nbsp&nbsp//your function here</br>}</br>< /script> </p>" +
						"</div>");
	},
	jq4: function(){
		$("#jq4").html("<h1 class='ui header'>JQuery add and remove elements</h1>" +
						"<div class='ui segment'>" +
							"<p> In JQuery we can easily add or remove elements with '.append()' and '.remove()'</p>" +
						"</div>" +
						"<div class='ui inverted segment'>" +
							"<p>Example:</br>< div id='someId'>< /div> //we create a div element</br></br>< script></br>$('#someId').append('< button> click me < /button>'); //this will add an element inside the div with id 'someId'</br>$('#someId').remove(); //this will remove the element div with id 'someId' and it's child elements</br>< /script></p>" +
						"</div>");
	},
	jq5: function(){
		$("#jq5").html("<h1 class='ui header'>JQuery add and remove class</h1>" +
						"<div class='ui segment'>" +
							"<p> In JQuery we can easily add and remove a class with '.addClass()' and '.removeClass()'</p>" +
						"</div>" +
						"<div class='ui inverted segment'>" +
							"<p>Example:</br>< div id='someId'>< /div> //we create a div element</br></br>< script></br>$('#someId').addClass('someClass'); //this will add class 'someClass' on the button element with id 'someId'</br>$('#someId').removeClass('someClass'); //this will remove class 'someClass' on the button element with id 'someId'</br>< /script></p>" +
						"</div>");
	},
	jq6: function(){
		$("#jq6").html("<h1 class='ui header'>JQuery show and hide elements</h1>" +
						"<div class='ui segment'>" +
							"<p> In JQuery we can easily show and hide an element with '.show()' and '.hide()'. Hiding an element doesn't delete an element, it is only invsible but it's space is still in the web view</p>" +
						"</div>" +
						"<div class='ui inverted segment'>" +
							"<p>Example:</br>< div id='someId'>< /div> //we create a div element</br></br>< script></br>$('#someId').hide(); //this will hide the button element with id 'someId'</br>$('#someId').show(); //this will show a hidden button element with id 'someId'</br>< /script></p>" +
						"</div>");
	},
	jq7: function(){
		$("#jq7").html("<h1 class='ui header'>JQuery Ajax</h1>" +
						"<div class='ui segment'>" +
							"<p> Ajax means 'Asynchronus Javascript And XML'. This means Ajax can dynamically perform a http request or server request(Backend, in example PHP) without reloading a page, it loads internally</p>" +
						"</div>" +
						"<div class='ui inverted segment'>" +
							"<p>Example:</br>< script></br>var string = 'string'; //we create a variable string to be pass on data to be send on the server</br></br>$.ajax({ //we will use an ajax function</br>&nbsp&nbsp&nbsp&nbsp&nbsp url: 'getDataFromDatabase.php', //ajax requires a 'url', this specify where the request will be sent, in this case, we will send request to 'getDataFromDatabase.php'</br>&nbsp&nbsp&nbsp&nbsp&nbsp data: string, //ajax looks for a data to be pass on the server(if there's any), in this case we pass the string variable we create on above</br>&nbsp&nbsp&nbsp&nbsp&nbsp type: 'POST', //type of request, 'POST' or 'GET' method, 'POST' is more secure than 'GET', so we're using 'POST'</br>&nbsp&nbsp&nbsp&nbsp&nbsp success: function(data){ //this is a callback function, if the request is successfull it will trigger into this, and return a response based on the backend response</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp //some code here</br>&nbsp&nbsp&nbsp&nbsp&nbsp}</br>});</br>< /script></br></br>< ?php //this will be an example of backend response</br>$data = $_POST['string']; //the string variable we pass to ajax data earlier</br></br>// assuming we do some stuffs inserting data to database</br>// let's assume sql insert is successful</br>echo true; //since sql insert is successful, we should send a response back to ajax, in this case we are sending 'true' response.</br>?></br></br>< script></br>//going back to ajax 'success' callback function</br></br>$.ajax({</br>&nbsp&nbsp&nbsp&nbsp&nbsp success: function(data){ // we can get the respons from PHP which is 'true'</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp var result = data; //we pass the response data to variable result, the response data value is 'true', coming from out PHP echo earlier</br>});</br>< /script></p>" +
						"</div>");
	}
}