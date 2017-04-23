window.js = {
	initializeJs: function(){
		$("body").html("");
		$("body").append("<div id='sidebarContainer'>" +
								"<div id='sidebar' class='ui right sidebar visible inverted vertical menu'>" +
									"<a class='item' href='#js1'>JS Variables</a>" +
									"<a class='item' href='#js2'>JS insert value into array</a>" +
									"<a class='item' href='#js3'>JS adding property and property value to an object</a>" +
									"<a class='item' href='#js4'>JS Getiing an Element</a>" +
									"<a class='item' href='#js5'>JS Events</a>" +
									"<a class='item' href='#js6'>JS function parameters</a>" +
								"</div>" +
							"</div>" +
							"<div id='contentContainer' style='padding-right:19rem;' class='pusher'></div>");
		$("#contentContainer").html("<div id='js1'></div><div id='js2'></div><div id='js3'></div><div id='js4'></div><div id='js5'></div><div id='js6'>");
		window.js.js1();
		window.js.js2();
		window.js.js3();
		window.js.js4();
		window.js.js5();
		window.js.js6();
	},
	js1: function(){
		$("#js1").html("<h1 class='ui header'>JS Variables</h1>" +
						"<div class='ui segment'>" +
							"<p> Javascript variables starts with 'var'. You can pass any value into js variable. (e.g, string, integer, array, object, functions)</p>" +
						"</div>" +
						"<div class='ui inverted segment'>" +
							"<p>Example:</br>var string = 'string'; //string variable</br>var integer = 1; //integer variable</br>var array = []; //array variable</br>var object = {}; //object variable</br>var function = function(){</br>&nbsp&nbsp&nbsp&nbsp&nbsp// your function here</br>&nbsp&nbsp&nbsp&nbsp&nbsp// if we will pass a function to a variable, to use that variable, we should use 'new function();'</br>}</p>" +
						"</div>");
	},
	js2: function(){
		$("#js2").html("<h1 class='ui header'>JS insert value into array</h1>" +
						"<div class='ui inverted segment'>" +
							"<p>Example:</br>var array = []; //create a array variable</br>var value = 'value'; //value to be insert into array</br>array.push(value);</p>" +
						"</div>");
	},
	js3: function(){
		$("#js3").html("<h1 class='ui header'>JS adding property and property value to an object</h1>" +
						"<div class='ui inverted segment'>" +
							"<p>Example:</br>var object = { //create a object variable</br>&nbsp&nbsp&nbsp&nbsp&nbspfirstProperty: 'valueOne', //'firstProperty'  is our object property and 'valueOne' is the value object property 'firstProperty'</br>}</p>" +
						"</div>");
	},
	js4: function(){
		$("#js4").html("<h1 class='ui header'>JS Getting an Element</h1>" +
						"<div class='ui segment'>" +
							"<p> In getting an element, you're getting the whole of it including it's objects, properties, functions. Getting an element results to an object. In this case we're only using 'document.getElementById'. See more on <a href='https://www.w3schools.com/js/js_htmldom_elements.asp' target='_blank'>JavaScript HTML DOM Elements</a></p>" +
						"</div>" +
						"<div class='ui inverted segment'>" +
							"<p>Example:</br>< button id='buttonId' class='buttonClass'>Click me< /button> //we'll create a element which is a button element with id 'buttonId' and class 'buttonClass'</br></br>< script></br>var buttonId = document.getElementById('buttonId'); //get the whole button element based on it's Id and pass it to a variable so we can use it</br>< /script></p>" +
						"</div>");
	},
	js5: function(){
		$("#js5").html("<h1 class='ui header'>JS Events</h1>" +
						"<div class='ui segment'>" +
							"<p> Javascript event like 'onclick' event. This will trigger if a user clicks an element. More Js Events on <a href='https://www.w3schools.com/jsref/dom_obj_event.asp' target='_blank'>HTML DOM Events.</a> In this case we will user 'onclick' event on an HTML element, we can also use '.click' on js side.</p>" +
						"</div>" +
						"<div class='ui inverted segment'>" +
							"<p>Example: //HTML element onclick</br>< button onclick='myFunction()'> click me < /button></br></br>< script></br>function myFunction(){ </br>&nbsp&nbsp&nbsp&nbsp&nbsp //your function here</br>}</br>< /script></p>" +
						"</div>" +
						"<div class='ui inverted segment'>" +
							"<p>Example: //JS .click event</br>< button id='myButton'> click me < /button></br></br>< script></br>var button = document.getElementById('myButton');</br></br>button.click = function(){</br>&nbsp&nbsp&nbsp&nbsp&nbsp// your function here</br>}</br>< /script></p>" +
						"</div>");
	},
	js6: function(){
		$("#js6").html("<h1 class='ui header'>JS function parameters</h1>" +
						"<div class='ui segment'>" +
							"<p> We can pass any parameters into a js function.</p>" +
						"</div>" +
						"<div class='ui inverted segment'>" +
							"<p>Example:</br>var string = 'string'; //string variable</br>var integer = 1; //integer variable</br>var array = []; //array variable</br>var object = {}; //object variable</br>var function = function(){</br>&nbsp&nbsp&nbsp&nbsp&nbsp// your function here</br>&nbsp&nbsp&nbsp&nbsp&nbsp// if we will pass a function to a variable, to use that variable, we should use 'new function();'</br>}</br></br>function myFunction(string, integer, array, object, function){ // we pass different type of data into function paramenter</br>&nbsp&nbsp&nbsp&nbsp&nbsp //your function here</br>}</p>" +
						"</div>");
	},
}