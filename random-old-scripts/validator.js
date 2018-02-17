// from Javacript Patterns by Stoyan Stefanov
// http://www.amazon.com/JavaScript-Patterns-ebook/dp/B0046RERXE
// strategy pattern - data validation
(function () {
  'use strict';

  var objectEach = (function () {
    return function (obj, iterator, context) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    };
  })();

  // define validator object
  var validator = {
    types: {},
    messages: [],

    validate: function (data, config) {
      var msg, type, checker;

      if (!config) throw new Error('validate(): config not defined');
      this.config = config;
      this.messages = [];

      objectEach(data, function (item, key) {
        type = this.config[key];
        checker = this.types[type];

        if (!type) return;

        if (!checker) throw new Error('validate(): no handler for type ' + type);

        if (!checker.validate(item)) {
          msg = 'Invalid value for "' + key + '", ' + checker.instructions;
          this.messages.push(msg);
        }
      });

      return this.hasErrors();
    },

    hasErrors: function () {
      return this.messages.length !== 0;
    }
  };

  // add some validation types
  validation.types = {
    isNotEmpty: {
      validate: function (value) {
        return value !== '';
      },
      instructions: 'the value can not be empty'
    },
    isNumber: {
      validate: function (value) {
        return isNaN(value);
      },
      instructions: 'the value can only be a number'
    }
  };


  // put together a data object to validate
  var data = {
    name: 'andy',
    num: '1'
  };


  // run the validator, pass in config object
  validator.validate(data, {
    name: 'isNotEmpty',
    num: 'isNumber'
  });

  if (validator.hasErrors()) {
    console.log(validator.messages.join('\n'));
  }
})();
