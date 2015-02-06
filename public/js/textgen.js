/* Simple Random Text generator */

/* 
 * Array with text 
 * Thanks a lot to @grejppi for this nice function
 */
function fillerText (length, end) {
    var words  = ['odrzivirazvoj', 'napredak', 'ekologija', 'samoodgovornost', 'prakticno', 'primenljivo'],
        s      = '';
    
    while (s.length < length) {
        s += words[Math.floor (Math.random () * words.length)];
    }
    
    return end ? s.substr (s.length - length, length) : s.substr (0, length);
}

// Generate some text

document.addEventListener('DOMContentLoaded', function () {
	var fade = document.querySelectorAll('.fade');
	for (var i = 0; i < fade.length; ++i) {
  		var curr = fade[i].innerHTML;
		fade[i].innerHTML = fillerText(40, true) + curr + fillerText(40, false);
	}
});
