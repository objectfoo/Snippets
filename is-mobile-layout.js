// find if the browser is under the influence of a media query
// allows you to modify the width rule in css and
// test for it in javascript w/o hardcoding
//
// requires a stylesheet e.g.
//
// #is-mobile-layout {
//   width: 10px;
// }

// @media only screen and (max-width: 550px) {
//  #is-mobile-layout {
//    width: 0px;
//  }
// }
(function(window) {
  'use strict';

  var doc = window.document,

  // lazy load on call
  isMobileLayout = function() {
    var div = doc.getElementById('is-in-mobile-layout');

    if(!div) {
      div = doc.createElement('div');
      div.id = 'is-in-mobile-layout';
      div.style.cssText = 'position:absolute;top:-100em;';
      doc.body.appendChild(div);
    }

    isMobileLayout = function() {
      return div.offsetWidth === 0;
    };

    return isMobileLayout();
  };
})(window);
