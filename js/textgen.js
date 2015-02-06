/* Simple Random Text generator */

// Array with text
function fillerText (length, end) {
    var words  = ['odrzivirazvoj', 'napredak', 'ekologija', 'samoodgovornost', 'prakticno', 'primenljivo'],
        s      = '';
    
    while (s.length < length) {
        s += words[Math.floor (Math.random () * words.length)];
    }
    
    return end ? s.substr (s.length - length, length) : s.substr (0, length);
}

// Random number (Thanks mozzila)
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function () {
	$('.clear').before(function () {
		$(this).before(fillerText(40, true))
	});
	$('.clear').after(function () {
		$(this).after(fillerText(40, false))
	});
});
