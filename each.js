// each, even native forEach is painfully slow,
// especially on arrays, prefer optimized for loop

// Tests: http://jsfiddle.net/objectfoo/MYjnm/

(function (global) {
  'use strict';

  global.each = (function (proto, len) {
    var nativeForEach = Array[proto].forEach;

    function hasOwn (obj, key) {
      return Object[proto].hasOwnProperty.call(obj, key);
    }

    return function (obj, iterator, context) {

      if (nativeForEach && obj.forEach === nativeForEach) {
        obj.forEach(iterator, context);
      }
      else if (obj[len] === +obj[len]) {
        for (var i=0, l=obj[len]; i < l; i++) {
          iterator.call(context, obj[i], i, obj);
        }
      }
      else {
        for (var key in obj) {
          if (hasOwn(obj, key)) {
            iterator.call(context, obj[key], key, obj);
          }
        }
      }
    };
  })('prototype', 'length');
})(this);
