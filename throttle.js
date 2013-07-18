// Throttle Function
// Nicholas Zakas, Professional JavaScript for Web Developers: pg. 753

stuff = (function (stuff) {
  'use strict';

  stuff.throttle = function (method, context, timeout) {
    clearTimeout(method.tId);
    method.tId = setTimeout(function () {
      method.call(context);
    }, timeout);
  };

  return stuff;
})(stuff || {});
