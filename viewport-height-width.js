// viewport height and width
// Nicholas Zachas
// professional javascript for web developers
// mobile quirks: quirksmode.org/mobile/viewports2.html
(function (window, document) {
  'use strict';

  var pageWidth = window.innerWidth,
      pageHeight = window.innerHeight;

  if (typeof pageWidth !== 'number') {

    if (document.compatMode === 'CSS1Compat') {
      pageWidth = document.documentElement.clientWidth;
      pageHeight = document.documentElement.clientHeight;
    } else {
      pageWidth = document.body.clientWidth;
      pageHeight = document.body.clientHeight;
    }
  }
})(window, document);

