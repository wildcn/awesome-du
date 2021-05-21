/*!
 * microsecond - lib/microsecond.js
 * 
 * Copyright(c) 2013 fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

exports.start = function () {
  return process.hrtime();
};

exports.diff = function (time) {
  var diff = process.hrtime(time);
  return diff[0] * 1000000 + diff[1] / 1000;
};
