// Reqires
const remote = require('electron').remote;
const settings = require('electron-settings');
const fs = require('fs');

function closeBtn() {
	const window = remote.getCurrentWindow();
	window.close();
}

function miniBtn() {
	const window = remote.getCurrentWindow();
	window.minimize();
}

function maxBtn() {
	const window = remote.getCurrentWindow();
	if (!window.isMaximized()) {
		window.maximize();
	} else {
		window.unmaximize();
	}
}

// Close SideNav
function closeNav() {
	$('.button-collapse').sideNav({
		closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
	});
}


//-----------
// NETWORKING
//-----------

// Login Post
function loginPost() {
	// Create our XMLHttpRequest object
	var hr = new XMLHttpRequest();
	// Create some variables we need to send to our PHP file
	var url = "https://api.fusionchat.io/v1/";
	var email = document.getElementById("login_email").value;
	var pass = document.getElementById("login_password").value;
	var vars = "login="+email+"&pass="+pass;
	hr.open("POST", url, true);
	// Set content type header information for sending url encoded variables in the request
	hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	// Access the onreadystatechange event for the XMLHttpRequest object
	hr.onreadystatechange = function() {
		if(hr.readyState == 4 && hr.status == 200) {
			var return_login = hr.responseText;
			document.getElementById("login-status").innerHTML = return_login;
			login();
		}
	}
	// Send the data to PHP now... and wait for response to update the status div
	hr.send(vars); // Actually execute the request
	document.getElementById("login-status").innerHTML = "processing...";
}

// Login
function login() {
	var login_state = document.getElementById("login-status").innerHTML;
	if (login_state == 0) {
		alert("Login failed")
	} else {
		alert("Login secsessful!")
		remote.getCurrentWindow().loadURL('home.html');
	}
}

// Register Post
function regPost() {
	// Create our XMLHttpRequest object
	var hr = new XMLHttpRequest();
	// Create some variables we need to send to our PHP file
	var url = "https://api.fusionchat.io/v1/";
	var email = document.getElementById("reg_email").value;
	var user = document.getElementById("reg_user").value;
	var pass = document.getElementById("reg_password").value;
	var gender = document.getElementById("reg_gender").value;
	var vars = "register="+email+"&pass="+pass+"&displayname="+user+"&gender="+gender;
	hr.open("POST", url, true);
	// Set content type header information for sending url encoded variables in the request
	hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	// Access the onreadystatechange event for the XMLHttpRequest object
	hr.onreadystatechange = function() {
		if(hr.readyState == 4 && hr.status == 200) {
			var return_reg = hr.responseText;
			document.getElementById("reg-status").innerHTML = return_reg;
		}
	}
	// Send the data to PHP now... and wait for response to update the status div
	hr.send(vars); // Actually execute the request
	document.getElementById("reg-status").innerHTML = "processing...";
}

function register() {

}
