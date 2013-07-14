// Throttle Function
// Nicholas Zakas, Professional JavaScript for Web Developers: pg. 753

(function () {
  'use strict';

  function throttle( method, context, timeout ) {
    clearTimeout(method.tId);
    method.tId = setTimeout(function() {
      method.call(context);
    }, timeout);
  }
})();
