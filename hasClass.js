var stuff = (function (stuff) {
  'use strict';

  stuff.hasClass = function (elem, className) {
    return (new RegExp('(^|\\s)' + className + '(\\s|$)')).test(elem.className);
  };

  return stuff;
})(stuff || {});
