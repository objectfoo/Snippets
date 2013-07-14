// Javascript Patterns Stoyan Stefanov page 175
var publisher = {

  on: function (fn, type) {
    type = type || 'any';

    if (typeof this.subscribers[type] === 'undefined') {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  },

  remove: function (fn, type) {
    this.visitSubscribers('unsubscribe', fn, type);
  },

  fire: function (publication, type) {
    this.visitSubscribers('publish', publication, type);
  },

  visitSubscribers: function (action, arg, type) {
    var pubtype = type || 'any',
      subscribers = this.subscribers[pubtype],
      max = subscribers.length,
      i;

    for (i = 0; i < max; i += 1) {

      if (action === 'publish') {
        subscribers[i](arg);
      } else if (subscribers[i] === arg) {
        subscribers.splice(i, 1);
      }
    }
  }
};

function makePublisher(o) {

  for (var i in publisher) {

    if (publisher.hasOwnProperty(i) && typeof publisher[i] === 'function') {
      o[i] = publisher[i];
    }
  }
  o.subscribers = { any: [] };
}

/*
example usage

var paper = {
  daily: function () {
    this.fire( 'big news today' );
  },

  monthly: function () {
    this.fire( 'interesting analysis', 'monthly' );
  }
};

makePublisher( paper );

var joe = {
  drinkCoffee: function (paper) {
    console.log( 'Just read' + paper );
  },

  sundayPreNap: function (monthly) {
    console.log( 'About to fall asleep reading this ' + monthly );
  }
};

paper.on( joe.drinkCoffee ); // subscribe to 'any' event
paper.on( joe.sundayPreNap, 'monthly' ); // subscribe to 'monthly' event

paper.daily(); // Just read big news today
paper.daily(); // Just read big news today
paper.monthly(); // About to fall asleep reading this interesting analysis

//
*/


