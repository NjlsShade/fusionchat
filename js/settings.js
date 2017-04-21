var fs = require('fs');

// Settings
var data = fs.readFileSync('data/data.json', 'utf8');

console.log(data);

function save() {
	var lang = document.getElementById('settings_lang').value;
	fs.writeFileSync('test.txt', lang, 'utf8');
}


function off(){
	var temp = fs.readFileSync('test.txt', 'utf8');
	var mySelect = document.getElementById('settings_lang');

	for(var i, j = 0; i = mySelect.options[j]; j++) {
	    if(i.value == temp) {
		mySelect.selectedIndex = j;
		break;
	    }
	}
}
