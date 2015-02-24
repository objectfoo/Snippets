'use strict';

var Q = require('Q')
	, cache;

Q.fcall(getCache)
	.then(logCache)
	.then(logCache);


function getCache() {
	var d;

	if (cache) return cache;
	d = Q.defer();

	setImmediate(function() {
		console.log('caching');
		cache = 'stuff';
		d.resolve();
	});

	return d.promise;
}

function logCache() { console.log(cache); }

// > caching
// > stuff
// > stuff
