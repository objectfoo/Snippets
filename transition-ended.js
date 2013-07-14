// stackoverflow.com/questions/5023514/how-do-i-normalize-css3-transition-functions-across-browsers
// test webkit last because opera will try to use it (lost reference)
// **NO IE6-9 Support!! (because no transitions)
// opera will fire end event 6 times in opera 12
// http://www.ianlunn.co.uk/blog/articles/opera-12-otransitionend-bugs-and-workarounds/

function whichTransitionEvent() {
  'use strict';

  var t,
  el = document.createElement('fakeelement'),
  transitions = {
    'transition': 'transitionEnd',
    'OTransition': 'oTransitionEnd',
    'MSTransition': 'msTransitionEnd',
    'MozTransition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd'
  };

  for (t in transitions) {

    if (el.style[t] !== undefined) {
      return transitions[t];
    }
  }
}
