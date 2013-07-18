// from Javacript Patterns by Stoyan Stefanov
// http://www.amazon.com/JavaScript-Patterns-ebook/dp/B0046RERXE
// strategy pattern - data validation
(function () {
  'use strict';

  // define validator object
  var validator = {
    types: {},
    messages: [],
    config: {},

    validate: function (data) {
      var i, msg, type, checker, resultOk;

      this.messages = [];

      for (i in data) {

        if (data.hasOwnProperty(i)) {
          type = this.config[i];
          checker = this.types[type];

          if (!type) {
            continue;
          }

          if (!checker) {
            throw {
              name: 'Validation Error',
              message: 'No handler to validate type ' + type
            };
          }

          resultOk = checker.validate(data[i]);

          if (!resultOk) {
            msg = 'Invalid value for "' + i + '", ' + checker.instructions;
            this.messages.push(msg);
          }
        }
      }
      return this.hasErrors();
    },

    hasErrors: function () {
      return this.messages.length !== 0;
    }
  };

  // add some validation types
  validator.types.isNotEmpty = {
    validate: function (value) {
      return value !== '';
    },
    instructions: 'the value can not be empty'
  };

  validator.types.isNumber = {
    validate: function (value) {
      return isNaN(value);
    },
    instructions: 'the value can only be a number'
  };

  // put together a data object to validate
  var data = {
    name: 'andy',
    num: '1'
  };

  // configure validator for our data object
  validator.config = {
    name: 'isNotEmpty',
    num: 'isNumber'
  };

  // run the validator
  validator.validate(data);

  if (validator.hasErrors()) {
    console.log(validator.messages.join('\n'));
  }
})();
