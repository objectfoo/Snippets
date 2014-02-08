/**
* detect native focusin support (I'm looking at you chrome...)
* mostly for firefox
************************************************************/
var bubblingFocusEvent = (function() {
	/**
	* detect if foucsin supported
	*********************************************************/
	var support,
		eventName = "onfocusin",
		div = document.createElement("div");

	if (!(support = eventName in window)) {
		div.setAttribute(eventName, "t");
		support = div.attributes[eventName].expando === false;
	}

	div = null;
	return support ? "focusin" : "focus";
})();
