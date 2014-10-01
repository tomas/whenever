Whenever
========

Lazy loading of modules in Node.js. If speed's your thing, this might come in handy.

Example
-------

Requiring a relative module on the same path.

    // foo.js

    module.exports.hello = function() {
      console.log('Hello world!');
    }

    // main.js

    var whenever = require('whenever');
    var modules  = whenever('foo', __dirname);

    console.log(modules); // {} -> not loaded yet.    
    modules.foo.hello(); // requires and then prints 'Hello world';

You can also pass an array and pre-load more than one module.

    var modules  = whenever(['foo', 'bar'], __dirname);

Ok, now let's get fancier. Let's lazy-load all modules in a given path.

    var modules = whenever('*', __dirname + '/lib');
    modules.foo.hello();
    modules.bar.bye();

If you need to use a npm/core module, you can also have it. Just don't pass the path argument.

    var modules = whenever(['async', 'fs']);

    modules.fs.readFile('/etc/passwd', function(err, res) {
      // continue hacking the gibson.
    })

Install
-------

    $ npm install whenever --save

About
-----

Written by Tomás Pollak.
(c) Fork, Ltd. MIT Licensed.
