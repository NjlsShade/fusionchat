//
// Loading configureations
//

// Load saved lang
function langSet(){
	var lang = settings.get('main_settings.lang');

	$('[id=settings_lang]').val( lang );
	$('select').material_select();
}

// Load saved tray
function traySet(){
	if (settings.get('main_settings.tray') == "checked") {
		$("input#tray").prop('checked', true);
	} else {
		$("input#tray").attr('checked', false);
	}
}

function soundSet(){
	if (settings.get('main_settings.sound') == "checked") {
		$("input#sound").prop('checked', true);
	} else {
		$("input#sound").attr('checked', false);
	}
}

function settingsSet(){
	langSet();
	traySet();
	soundSet();
}


//
// Saving configreations
//

// Save selected settings
function saveLang() {
	// Get selected language option
	var lang = document.getElementById('settings_lang').value;

	// Language setting
	settings.set('main_settings.lang', lang);
}
function saveTray() {
	if ($('#tray').is(":checked")){
		settings.set('main_settings.tray', "checked");
	} else {
		settings.delete('main_settings.tray');
	}
}

function saveSound() {

	if ($('#sound').is(":checked")){
		settings.set('main_settings.sound', "checked");
	} else {
		settings.delete('main_settings.sound');
	}
}

function settingsSave() {
	saveLang();
	saveTray();
	saveSound();
	// Call tost
	toast();
}


// Open Settings Menu
function settingsOpen() {
	$('.modal').modal();
	closeNav();
	settingsSet();
}

// Display toast
function toast() {
	Materialize.toast('Settings Saved!', 4000);
}
