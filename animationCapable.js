var isAnimationCapable = (function (undefined) {
  var el = document.createElement('div')
    , animation = false;

  if (el.style.animationName !== void 0 ||
      el.style.WebkitAnimationName !== void 0) {
    animation = true;
  }

  el = null;

  return animation;
})();
