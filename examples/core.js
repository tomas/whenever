var whenever = require('..');

var modules = whenever(['fs', 'dns']);

console.log('You should see two [Function] things below.');
console.log(modules.fs.chmod);
console.log(modules.dns.resolve);
