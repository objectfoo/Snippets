(function () {
  'use strict';

  var frame = 0,
  frames = ['frame0', 'frame1', 'frame2', 'frame3'],

  // request animation frame polyfill
  requestFrame = (function (w,  suffix) {
    return  w['r'       + suffix] ||
            w['webkitR' + suffix] ||
            w['mozR'    + suffix] ||
            w['msR'     + suffix] ||
            w['oR'      + suffix] ||

            // if native request animation frame not
            // available polyfill with setTimeout
            function (cb) {
              setTimeout(cb, 1000 / 60);
            };
  })(window, 'equestAnimationFrame');

  function drawFrame(currentFrame) {
    document.body.innerHTML = currentFrame;
  }

  function animate() {
    drawFrame(frames[frame]);

    // array loop shortcut using modulus
    frame = (frame + 1) % frames.length;
    requestFrame(animate);
  }

  animate();
})();
