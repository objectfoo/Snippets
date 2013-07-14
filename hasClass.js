(function (global) {
  'use strict';

  function hasClassRe(elem, className) {
    return (new RegExp('(^|\\s)' + className + '(\\s|$)')).test(elem.className);
  }

  global.hasClass = hasClassRe;
})(this);
