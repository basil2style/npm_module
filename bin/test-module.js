#!/usr/bin/env node

var lib = require('../lib/index.js');


var args = process.argv.splice(process.execArgv.length + 2);
// Retrieve the first argument
var name = args[0];
var value = args[1];
var message = lib.sayHello(name);
console.log(message + "," + value);