// http://lea.verou.me/2009/02/appearances-can-be-deceiving-mr-anderson-aka-short-code-is-not-always-fast-code/
// the 'bullet proof' method

// mostly for primitive types,
// preferred for array too

function toString(value) {
    return Object.prototype.toString.call(value);
}

function isType(type) {
    return function (value) {
        return toString(value) === type;
    }
}

var isString = isType('[object String]'),
    isNumber = isType('[object Number]'),
    isArray  = isType('[object Array]');

console.log(isString('string'));
console.log(isString(new String('string')));
console.log(isString(1));

console.log(isNumber(1));
console.log(isNumber(new Number(1)));
console.log(isNumber(NaN)); // ...
console.log(isNumber('a'));

console.log(isArray([]));
console.log(isArray([1]));
console.log(isArray({}));
