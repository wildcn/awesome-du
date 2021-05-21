/*!
 * microsecond - benchmark.js
 * 
 * Copyright(c) 2013 fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var Benchmark = require('benchmark');
var microsecond = require('./');
var microtime = require('microtime');

var start = microsecond.start();
var now = microtime.now();
var now2 = Date.now();

var suite = new Benchmark.Suite();
suite

.add('microtime diff', function () {
  microtime.now() - now;
})

.add('microsecond diff', function () {
  microsecond.diff(start);
})

.add('Date diff', function () {
  Date.now() - now2;
})

// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({async: false});
