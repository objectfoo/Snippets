# Implementing hasClass

Testing out a few ways to implement a hasClass function.

## Split classnames into array and string compare

Take an element's className string and replace legal whitespace characters with a true space, split this string using space as the delimiter then loop through the array elements and compare the target class string with the array element.

```javascript
function hasClassStrArray(elem, className) {
  var i,
      elementClasses = elem.className.replace(/[\t\r\n]/g, " ").split(" ");

  i = elementClasses.length;
  while (i--) {

    if (elementClasses[i] === className) {
      return true;
    }
  }
  return false;
}
```

## Use indexOf to find a substring

Take elements className string and replace legal whitespace characters with a true space, then get indexOf target string.

```javascript
function hasClassStrIndexof(elem, className) {
  var klassString = (' ' + elem.className + ' ').replace(/[\t\r\n]/g, ' ');

  return (klassString.indexOf((' ' + className + ' ')) > -1) ? true : false;
}
```

## Use regular expression to find substring

Since the regular expression special character `\s` already matches whitespace characters use it with beginning of line or end of line alteration to find target class.

```javascript
function hasClassRe(elem, className) {
  return (new RegExp("(^|\\s)" + className + "(\\s|$)")).test(elem.className);
}
```

## Conclusion

IE 10 favors the array method, Chrome and Safari favor regexp and Firefox favors indexOf, but they are all fairly close in performance. So I think regexp wins because of much less code.

[Unit tests](http://jsfiddle.net/objectfoo/TheA3/) do they work?
[Performance](http://jsperf.com/regexp-vs-string-computer-on-classname/4) which is fastest?
