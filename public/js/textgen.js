/* Simple Random Text generator */

// Array with text
var text = ['samoodrzivostznanjea','odrzivirazvojobrazov','istrajnostvernostrad','perspektivabuducnost'];

// Random number (Thanks mozzila)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function(){
	$('.clear').before(function(){
		$(this).before(text[getRandomInt(0,3)])
	});
	$('.clear').after(function(){
		$(this).after(text[getRandomInt(0,3)])
	});
});
