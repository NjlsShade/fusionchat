var fs = require('fs');

// Settings
var data = fs.readFileSync('data/data.json', 'utf8');

console.log(data);

// Display toast
function tost() {
	Materialize.toast('Settings Saved!', 4000)
}

function save() {
	var lang = document.getElementById('settings_lang').value;
	fs.writeFileSync('test.txt', lang, 'utf8');
	tost();
}


// Why can't I put this in a function?!?!

// Open Settings Menu
function openSettings() {
	$('.modal').modal();
	closeNav();
	settingsSet();
}

function settingsSet(){
	var lang = fs.readFileSync('test.txt', 'utf8');
	$('[id=settings_lang]').val( lang );
	$('select').material_select();
}
