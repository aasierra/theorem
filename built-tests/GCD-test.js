'use strict';

var GCD = require("../src/GCD.js");
var expect = require('chai').expect;
var assert = require('assert');
describe("Math GCD Should work", function () {
  it('should return 3 for 12 and 15', function () {
    assert.equal(Math.gcd(12, 15), 3);
  });
});