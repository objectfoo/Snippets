'use strict';

var crypto = require('crypto')
	, glob = require('glob')
	, async = require('async')
	, fs = require('fs')
	, path = require('path')
	;

module.exports = hashdir;

function hashdir(dir, cb) {
  var shasum = crypto.createHash('sha1');

  glob(dir + '/**/*.*', { root: '/' }, function(err, paths) {

    if (err) {
      cb(err);      
    }
    else {
      async.mapSeries(paths, fs.stat, function(err, stats) {
        var str = '';

        if (err) {
          cb(err);
        }
        else {
          for (var i = paths.length - 1; i >= 0; i--) {
            str += path.basename(paths[i]) + stats[i].mtime.getTime();
          }
          shasum.update(str);

          cb(null, shasum.digest('hex'));
        }
      });
    }
  });
}
