var foo = require('./foo.js');
var bar = require('../lib/bar.js');
var gamma = require('gamma');

var x = foo(1) + bar('baz');

console.log(gamma(x));
