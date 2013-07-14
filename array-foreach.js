// this polyfill and even forEach are painfully slow,
// prefer optimized for loop
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
