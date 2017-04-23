// Load saved settings
function settingsSet(){
	var lang = settings.get('main_settings.lang');

	$('[id=settings_lang]').val( lang );
	$('select').material_select();
}

// Open Settings Menu
function openSettings() {
	$('.modal').modal();
	closeNav();
	settingsSet();
}

// Save selected settings
function saveLang() {
	// Get selected language option
	var lang = document.getElementById('settings_lang').value;

	// Language setting
	settings.set('main_settings', {
	  lang: lang,
	});

	// Call tost
	toast();
}

function saveTray() {
	$('.set_tray').attr('type', 'saveold');
}


// Display toast
function toast() {
	Materialize.toast('Settings Saved!', 4000)
}
