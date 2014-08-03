var whenever = require('..');

var modules = whenever('*', __dirname + '/modules');

console.log('Not loaded yet.');
console.log(modules.foo);

console.log('This should require it automatically.');
console.log(modules.foo.bar);

console.log('This should require it automatically.');
modules.bar.hello();