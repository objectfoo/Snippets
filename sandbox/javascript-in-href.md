## JS code inside an href

You can put js code inside an anchor's href attribute and get it to execute if you prepend it with javascript:

```html
<a href="javascript:console.log('ohai!')">Hello</a>
```

IE9 and FF21 (and others), will replace the contents of the document with the result of your js unless it's `undefined`. The code below returns a jQuery object so clicking the anchor will result in a white page with [Object object] on it.

```html
<a href="javascript:$('body').addClass('pony-time')">Activate Pony Time</a>
```

### Solutions

Call void with your code as parameter, void always returns `undefined`.

```html
<a href="javascript:void($('body').addClass('pony-time'))">Activate Pony Time</a>
```

Wrap your code in an IIFE, which implicitly returns `undefined`.

```html
<a href="javascript:(function() {$('body').addClass('pony-time')})()">Activate Pony Time</a>
```

## onclick handler

If you have to inline js putting it inside the onclick handler is almost always better, but using the onclick handler will bubble a click event up through the DOM. Return false will only prevent the default it will not cancel the event bubble you need to do it yourself. Which in some cases is more code than just using the javascript protocol.

## Tests

[jshref](http://www.objectfoo.com/sandbox/jshref/)
