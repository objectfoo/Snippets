/**
* detect focusin support, mostly for firefox
*
* https://gist.github.com/jonathantneal/7366668
************************************************************/
var supportsFocusin = (function() {

	var
	support = false,
	parent = document.lastChild,
	a = document.createElement('a'),
	addSupport = function () {
		support = true;
	};

	a.href = '#';

	a.addEventListener ? a.addEventListener('focusin', addSupport) : a.onfocusin = addSupport;

	parent.appendChild(a).focus();

	parent.removeChild(a);

	return support;
})();
