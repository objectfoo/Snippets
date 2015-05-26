var isAnimationCapable = (function (undef) {
  var el = document.createElement('div')
    , animation = false;

  if (el.style.animationName !== undef ||
      el.style.WebkitAnimationName !== undef) {
    animation = true;
  }

  el = null;

  return animation;
})();
