var foo = require('./foo.js');
var bar = require('../lib/bar.js');
var gamma = require('gamma');

var x = foo(1) + bar('baz');
// foo(1) == 3
// bar('baz') == 1
// x == 4
// gamma(n + 1) == n!

console.log(gamma(x));
