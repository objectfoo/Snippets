/**
* detect native focusin support
* mostly for firefox
************************************************************/
var bubblingFocusEvent = (function() {
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
