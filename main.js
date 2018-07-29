var nav = document.querySelector('nav');


window.onload = function () {
	'use strict';
	document.getElementById('firstImg').style.height = window.innerHeight+'px';
	document.getElementById('firstImg').style.width = window.innerWidth+'px';
}

window.onscroll = function () {
	if (document.documentElement.scrollTop) {
		nav.className += ' black';
	}
	else{
		nav.className -= ' black';
	}
}