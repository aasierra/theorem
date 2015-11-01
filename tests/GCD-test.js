let GCD = require("../src/GCD.js");
let expect = require('chai').expect;
let assert = require('assert');
describe("Math GCD Should work", () => {
  it('should return 3 for 12 and 15', () => {
    assert.equal(Math.gcd(12,15), 3);
  });
});
