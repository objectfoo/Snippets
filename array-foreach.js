// this polyfill and even forEach are painfully slow,
// prefer optimized loop
(function () {
  'use strict';

  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, context) {

      for (var i = 0, len = this.length; i < len; i++) {
        callback.call(context || null, this[i], i, this);
      }
    };
  }
})();

// optimized loop
var stuff = (function (stuff) {
  'use strict';

  stuff.arrayForEach = function (array, callback) {
    var i = 0, count = array.length;

    while (i < count) {
      callback(array[i++]);
    }
  };

  return stuff;
})(stuff || {});
