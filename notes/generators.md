# Getting started with koa

* koa is made by people who did express.
* it uses ES6 features
* it allows you to write apps without callbacks
* it's a *minimal* framework
* needs `--harmony` flag
* start: `node --harmony .`



## Generators

Generators return a function with next method. Calling fn.next(); will return an object with yield value and done status.

### Syntax

```javascript
function* foo() {
	var i = 0;
	while(i < 2) {
		yield i++;
	}
}

# $ node --harmony .
# { value: 0, done: false }
# { value: 1, done: false }
# { value: undefined, done: true }
```

Invoking a generator returns a generator in a suspended state. Calling `generator.next()` will start/resume execution.

### Yield can receive a value

When execution resumes yield can optionally receive a value with the use of `gen.next(value)`

```javascript
function* foo() {
	var name = yield 'What is your name?';
	return 'Hello ' + name;
}

var bar = foo();

console.log(bar.next().value);
# What is your name?
console.log(bar.next('Captain Morgan').value);
# Hello Captain Morgan
```

### Error handling

An error can be thrown inside a generator.

```javascript
function* foo() {  
	try {
		yield 'B';   // yield b receive Error
	} catch (err) {
		throw err;   // catch and re-throw Error
	}
}

var bar = foo();  
if (bar.next().value == 'B') {  
	bar.throw(new Error("it's B!"));
}
```

### Generator delegation

A generator can yield to another nested generator. foo.next() is called once successfully, bar generator calls baz generator which throws.

```javascript
function *bar() {
	yield *baz();
}

function *baz() {
	throw new Error('Baz throws!');
}

function *foo() {
	yield 'a';
	yield *bar();
	yield 'c';
}

for (v of foo()) {
	console.log(v);
}

// a
// /Users/satake/GitHub/koa-test/examples/yieldgenerator.js:6
// 	throw new Error('Baz throws!');
// 	      ^
// Error: Baz throws!
//     at baz (/Users/satake/GitHub/koa-test/examples/yieldgenerator.js:6:8)
//     at GeneratorFunctionPrototype.next (native)
//     at bar (/Users/satake/GitHub/koa-test/examples/yieldgenerator.js:2:9)
//     at GeneratorFunctionPrototype.next (native)
//     at foo (/Users/satake/GitHub/koa-test/examples/yieldgenerator.js:11:9)
//     at GeneratorFunctionPrototype.next (native)
//     at Object.<anonymous> (/Users/satake/GitHub/koa-test/examples/yieldgenerator.js:15:11)
//     at Module._compile (module.js:460:26)
//     at Object.Module._extensions..js (module.js:478:10)
//     at Module.load (module.js:355:32)

```