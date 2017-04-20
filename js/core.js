// Reqires
const remote = require('electron').remote;

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

//Settings Menu
const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')
const url = require('url');
function settings() {
	//Create Window
	win = new BrowserWindow({width: 600, height: 500, frame: false});

	//load index.html
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'settings.html'),
		protocol: 'file',
		slashes: true
	}));

	win.on('closed', () => {
		win = null
	});
}

// Login Post
function login_post(){
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
			var return_data = hr.responseText;
			document.getElementById("status").innerHTML = return_data;
		}
	}
	// Send the data to PHP now... and wait for response to update the status div
	hr.send(vars); // Actually execute the request
	document.getElementById("login_status").innerHTML = "processing...";
}

// Register Post
function reg_post(){
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
			var return_data = hr.responseText;
			document.getElementById("reg_status").innerHTML = return_data;
		}
	}
	// Send the data to PHP now... and wait for response to update the status div
	hr.send(vars); // Actually execute the request
	document.getElementById("reg_status").innerHTML = "processing...";
}
