/*
* FED test counter object
* **************************************************/

// constructor, prototype methods & prop, module pattern
(function () {
  'use strict';

  var Counter = (function () {
    function C() { this.count = 0; }
    C.prototype = {
      inc: function () { this.count++; },
      dec: function () { this.count--; },
      getCount: function () { return this.count; }
    };
    return C;
  })(),

  counter = new Counter();      // count 0
  counter.inc();                // count 1
  counter.dec();                // count 0
  counter.value();              // 0
})();

// object literal, not all that reusable but short and has trick api
(function () {
  var counter = {
    value: 0,
    inc: function () { this.count++; },
    dec: function () { this.count--; }
  };

  counter.inc();              // value 1
  counter.dec();              // value 0
  console.log(counter.value); // 0
})();

// constructor w/instance methods
(function () {
  'use strict';

  function Counter() {
    this.count = 0;

    this.inc = function () { this.count++; };
    this.dec = function () { this.count--; };
    this.value = function () { return this.count; };
  }

  var counter = new Counter();  // count 0
  counter.inc();                // count 1
  counter.dec();                // count 0
  counter.value();              // 0
})();

// factory w/private vars and methods object returned as api
(function () {
  function privateCounter() {
    var count = 0;

    function inc() { count++; }
    function dec() { count--; }
    function value() { return count; }

    return {
      inc: inc,
      dec: dec,
      value: value
    };
  }

  var counter = privateCounter(); // count 0
  counter.inc();                  // count 1
  counter.dec();                  // count 0
  counter.value();                // 0
})();

