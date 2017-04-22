// Settings
var data = fs.readFileSync('data/data.json', 'utf8');

// Display toast
function toast() {
	Materialize.toast('Settings Saved!', 4000)
}

// Save selected settings
function save() {
	var lang = document.getElementById('settings_lang').value;
	fs.writeFileSync('test.txt', lang, 'utf8');

	// Call tost
	toast();
}

// Open Settings Menu
function openSettings() {
	$('.modal').modal();
	closeNav();
	settingsSet();
}

// Load saved settings
function settingsSet(){
	var lang = fs.readFileSync('test.txt', 'utf8');
	$('[id=settings_lang]').val( lang );
	$('select').material_select();
}

var lang_temp = fs.readFileSync('test.txt', 'utf8');
settings.set('lang', {
  first: 'Cosmo',
  last: 'Kramer'
});

var yay = settings.get('lang.first');
alert(yay);
