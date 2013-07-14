// stackoverflow.com/questions/1649086/detect-rotation-of-android-phone-in-the-browser-with-javascript
// test for mobile device orientation change with throttled fallback

(function () {
  'use strict';

  var previousOrientation = 0;
  var checkOrientation = function () {
    if (window.orientation !== previousOrientation) {
      previousOrientation = window.orientation;
      // orientation changed, do your magic here
    }
  };

  window.addEventListener('resize', checkOrientation, false);
  window.addEventListener('orientationchange', checkOrientation, false);

  // (optional) Android doesn't always fire orientationChange on 180 degree turns
  setInterval(checkOrientation, 2000);
})();
