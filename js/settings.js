var fs = require('fs');

// Settings
var data = fs.readFileSync('data/data.json', 'utf8');

console.log(data);

function save() {
	var lang = document.getElementById('mySelect').value;
	fs.writeFileSync('test.txt', lang, 'utf8');
}


function settingsSet(){
	var temp = fs.readFileSync('test.txt', 'utf8');
	var mySelect = document.getElementById('mySelect');

	for(var i, j = 0; i = mySelect.options[j]; j++) {
	    if(i.value == temp) {
		mySelect.selectedIndex = j;
		console.log('got here');
		break;
	    }
	    console.log('nope');
	}
}
