var isAnimationCapable = (function (undefined) {
	var el = document.createElement('div'),
		animation = !!0;

	if (el.style.animationName !== undefined || el.style.WebkitAnimationName !== undefined) {
		animation = !!1;
	}

	el = null;

	return animation;
})();