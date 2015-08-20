var ls   = require('fs').readdirSync,
    stat = require('fs').statSync,
    path = require('path');

module.exports = function(keys, root) {
  var obj = { _keys: [] };

  if (keys === '*') {
    keys = ls(root).filter(function(file) {
      return !stat(path.join(root, file)).isDirectory()
    });
  } else if (typeof keys == 'string') {
    keys = [keys]
  }

  keys.forEach(function(mod) {
    var key = path.basename(mod).replace(/\.js$/, '');
    obj._keys.push(key);

    Object.defineProperty(obj, key, {
      get: function() {
        var target = root ? path.resolve(root, mod) : mod;
        return require(target);
      }
    });
  })

  return obj;
}
