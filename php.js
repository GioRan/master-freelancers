window.php = {
	initializePhp: function(){
		$("body").html("");
		$("body").append("<div id='sidebarContainer'>" +
								"<div id='sidebar' class='ui right sidebar visible inverted vertical menu'>" +
									"<a class='item' href='#php1'>PHP Tag and file extension</a>" +
									"<a class='item' href='#php2'>PHP variables</a>" +
									"<a class='item' href='#php3'>PHP insert value into an array</a>" +
									"<a class='item' href='#php4'>PHP adding object property and value</a>" +
									"<a class='item' href='#php5'>PHP MYSQL</a>" +
									"<a class='item' href='#php6'>PHP json encode and decode</a>" +
									"<a class='item' href='#php7'>PHP $_SESSION</a>" +
								"</div>" +
							"</div>" +
							"<div id='contentContainer' style='padding-right:19rem;' class='pusher'></div>");
		$("#contentContainer").html("<div id='php1'></div><div id='php2'></div><div id='php3'></div><div id='php4'></div><div id='php5'></div><div id='php6'></div><div id='php7'></div>");
		window.php.php1();
		window.php.php2();
		window.php.php3();
		window.php.php4();
		window.php.php5();
		window.php.php6();
		window.php.php7();
	},
	php1: function(){
		$("#php1").html("<h1 class='ui header'>PHP Tag and file extension</h1>" +
						"<div class='ui segment'>" +
							"<p> PHP syntax enclosed with < ?php and ?>, PHP starts with < ?php and ends with ?>. Php syntax is saved within a file with '.php' extension.</p>" +
						"</div>" +
						"<div class='ui inverted segment'>" +
							"<p>Example:</br>< ?php echo 'hello world' ?></p>" +
						"</div>");
	},
	php2: function(){
		$("#php2").html("<h1 class='ui header'>PHP variables</h1>" +
						"<div class='ui segment'>" +
							"<p> PHP variables starts with '$', a dollar sign. </p>" +
						"</div>" +
						"<div class='ui inverted segment'>" +
							"<p> Example:</br>< ?php</br>$string = 'hello'; //string variable</br>$integer = 1; //integer variable</br>$array = array(); //array variable</br>$object = new stdClass(); //object variable</br>?> </p>" +
						"</div>");
	},
	php3: function(){
		$("#php3").html("<h1 class='ui header'>PHP insert value into an array</h1>" +
						"<div class='ui inverted segment'>" +
							"<p> Example:</br>< ?php</br>$array = array(); //create array variable</br>$data = 'data'; //value to be put in array</br>$result = 'result'; //value to be put in array</br></br>array_push($array, $data);</br>array_push($array, $result)</br>//$array will be = ['data', 'result']</br>?> </p>" +
						"</div>");
	},
	php4: function(){
		$("#php4").html("<h1 class='ui header'>PHP adding object property and value</h1>" +
						"<div class='ui inverted segment'>" +
							"<p> Example:</br>< ?php</br>$object = new stdClass(); //create object variable</br>$object->data; //adding property to $object which is 'data'</br>$object->data = 'sample'; //add a value 'data' to object property 'data'</br>//$object will be {data: 'sample'}</br>?> </p>" +
						"</div>");
	},
	php5: function(){
		$("#php5").html("<h1 class='ui header'>PHP MYSQL</h1>" +
						"<div class='ui inverted segment'>" +
							"<p> Example:</br>< ?php</br>$query = mysql_query('SELECT * FROM sampleTable'); &nbsp&nbsp&nbsp&nbsp&nbsp//mysql_query function will return a 'true' or 'false' boolean, if sql query is success it will return 'true' else it will return false, so we should pass it to a variable, imagine we have a database table 'sampleTable'</br></br>if($query){&nbsp&nbsp&nbsp&nbsp&nbsp//this conditional statement will filter if '$query' is success or fail</br>&nbsp&nbsp&nbsp&nbsp&nbspif(mysql_num_rows($query) > 0){&nbsp&nbsp&nbsp&nbsp&nbsp//this condition statement will filter if the fetched data($query) row length are greater than 0</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspwhile($row=mysql_fetch_array($query)){&nbsp&nbsp&nbsp&nbsp&nbsp//we should use 'while' statement to get data row one by one, 'mysql_fetch_array($query)' function gets the data rows from the database, we should pass it to a variable($row) to get its values</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspecho $row['username']; &nbsp&nbsp&nbsp&nbsp&nbsp//imagine we have a field name 'username' and we are getting it's value</br></br>?> </p>" +
						"</div>");
	},
	php6: function(){
		$("#php6").html("<h1 class='ui header'>PHP json encode and decode</h1>" +
						"<div class='ui segment'>" +
							"<p> PHP array and object cannot be 'echo', the only thing PHP can 'echo' is a string, so if we will echo an array or an object we have to use 'json_encode'</p>" +
						"</div>" +
						"<div class='ui inverted segment'>" +
							"<p> Example:</br>< ?php</br>$array = array('gio', 'dens', 'kenneth'); //create an array with 3 values, it will be ['gio', 'dens', 'kenneth']</br>echo json_encode($array); //this will echo ['gio', 'dens', 'kenneth'] AS IS string.</br>?> </p>" +
						"</div>" +
						"<div class='ui segment'>" +
							"<p> PHP '$_GET' and '$_POST' can only accept string values, so if PHP receives an array or an object, surely that array/object is converted to string, so in this case we have to use 'json_decode'</p>" +
						"</div>" +
						"<div class='ui inverted segment'>" +
							"<p> Example:</br>< ?php</br>$data = file_get_contents('php://input'); // this syntax accepts string itself, array and objects as string, unlike '$_POST' and '$_GET' only accepts a single data string</br>$result = json_decode($data); //this will convert a 'stringed object/array' to a 'real object/array'</br>?> </p>" +
						"</div>");
	},
	php7: function(){
		$("#php7").html("<h1 class='ui header'>PHP $_SESSION</h1>" +
						"<div class='ui segment'>" +
							"<p> PHP Sessions are PHP global variables, we can store anything here. '$_SESSION' is usually used to store with 'user id' in logged in accounts so the web app can retain the user logged in. '$_SESSION' is stored as cache in a browser, so if we delete a browser's cache, normally '$_SESSION' variables will be deleted.</p>" +
						"</div>" +
						"<div class='ui inverted segment'>" +
							"<p>Example:</br>< ?php </br>$_SESSION['id'] = 1234567890; //we created a '$_SESSION' variable called 'id' and passed the value 1234567890 on it.</br> ?></p>" +
						"</div>");
	},
}