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

function post(){
    // Create our XMLHttpRequest object
    var hr = new XMLHttpRequest();
    // Create some variables we need to send to our PHP file
    var url = "https://api.fusionchat.io/v1/";
    var user = document.getElementById("user").value;
    var pass = document.getElementById("password").value;
    var vars = "login="+user+"&pass="+pass;
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
    document.getElementById("status").innerHTML = "processing...";
}
