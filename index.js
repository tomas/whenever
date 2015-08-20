var ls       = require('fs').readdirSync,
    basename = require('path').basename,
    resolve  = require('path').resolve;

module.exports = function(keys, path) {
  var obj = { _keys: [] };

  if (keys === '*') {
    keys = ls(path);
  } else if (typeof keys == 'string') {
    keys = [keys]
  }

  keys.forEach(function(mod) {
    var key = basename(mod).replace(/\.js$/, '');
    obj._keys.push(key);

    Object.defineProperty(obj, key, {
      get: function() {
        var target = path ? resolve(path, mod) : mod;
        return require(target);
      }
    });
  })

  return obj;
}
