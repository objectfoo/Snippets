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

	// beginning of page so it doesn't scroll down. may impede other scroll actions though
	parent.insertBefore(a, parent.firstChild).focus().blur();

	parent.removeChild(a);

	return support;
})();
