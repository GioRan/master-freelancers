window.login = {
	initializeLogIn: function(){
		$("body").html("");
		$("body").html("<div id='log1'></div>");
		window.login.log1();
	},
	log1: function(){
		$("#log1").html("<h1 class='ui header'>Login Example</h1>" +
						"<div class='ui segment'>" +
							"<p> Note: We assume there is 'dbConn.php' for our database connection. I will not put comments on below codes so make sure you've gone through PHP, Javascript, JQuery tutorial. If you can't understand some codes you can chat me. Goodluck Masters!</p>" +
						"</div>" +
						"<div class='ui inverted segment'>" +
							"<p>index.html</br></br>< html></br>&nbsp&nbsp&nbsp&nbsp&nbsp< head></br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp< script src='jquery.min.js'>< /script></br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp< script src='index.js'>< /script></br>&nbsp&nbsp&nbsp&nbsp&nbsp< /head></br>< body></br>&nbsp&nbsp&nbsp&nbsp&nbsp< form id='myForm'></br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp< input type='text' id='username'/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp< input type='text' id='password'/></br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp< input type='submit' value='Login'/></br>&nbsp&nbsp&nbsp&nbsp&nbsp< /form></br>< div id='formMessage'>< /div></br>< /body></br>< /html></p>" +
						"</div>" +
						"<div class='ui inverted segment'>" +
							"<p>index.js</br></br>$('#myForm').submit(function(e){</br>&nbsp&nbsp&nbsp&nbsp&nbsp e.preventDefault();</br></br>&nbsp&nbsp&nbsp&nbsp&nbsp var username = $('#username').val();</br>&nbsp&nbsp&nbsp&nbsp&nbsp var password = $('#password').val();</br>&nbsp&nbsp&nbsp&nbsp&nbsp username.trim();</br>&nbsp&nbsp&nbsp&nbsp&nbsp password.trim();</br></br>&nbsp&nbsp&nbsp&nbsp&nbsp if(username == '' || password == ''){</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp$('#formMessage').html('< p> Please fill in the fields to login < /p>');</br>&nbsp&nbsp&nbsp&nbsp&nbsp} else if(username != '' && password != ''){</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp var dataToSend = {</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp user: username,</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp pass: password</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp }</br></br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp $.ajax({</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp url: 'index.php',</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp data: dataToSend, </br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp type: 'POST',</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp success: function(data){</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp if(data == true){</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp $('#formMessage').html('Success Login!');</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp} else if(data == false){</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp$('#formMessage').html('Wrong username or password');</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp}</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp}</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp});</br>&nbsp&nbsp&nbsp&nbsp&nbsp}</br>});</p>" +
						"</div>" +
						"<div class='ui inverted segment'>" +
							"<p>index.php</br></br>< ?php</br>include('dbConn.php');</br></br>$username = $_POST['user'];</br>$password = $_POST['pass'];</br></br>$query = mysql_query('SELECT * FROM sampleTable WHERE username = '$username' AND password = '$password'');</br></br>if($query){</br>&nbsp&nbsp&nbsp&nbsp&nbsp if(mysql_num_rows($query) == 1){</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp echo true;</br>&nbsp&nbsp&nbsp&nbsp&nbsp} else if(mysql_num_rows($query) == 0){</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp echo false;</br>&nbsp&nbsp&nbsp&nbsp&nbsp}</br>}</p>" +
						"</div>");
	},
}