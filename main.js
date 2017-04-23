const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');



require('electron-debug')({showDevTools: true});

let win;

app.on('ready', () => {
	win = new BrowserWindow();
});

function createWindow(){
	//Create Window
	win = new BrowserWindow({width: 800, minWidth: 640, height: 620, minHeight: 500, frame: true, devTools: true});

	//load index.html
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true
	}));

	win.on('closed', () => {
		win = null
	});
}

app.on('ready', createWindow);

//Exit Program
app.on('window-all-closed', () => {
	//Check if Mac
	if(process.platform !== 'darwin'){
		app.quit();
	}
});
