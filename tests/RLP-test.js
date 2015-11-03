let GCD = require("../src/GCD.js");
let RLP = require("../src/rlp.js");
let expect = require('chai').expect;
let assert = require('assert');
describe("Testing Relative Primes", () => {
  it('should return 1 for 13 and 15', () => {
    assert.equal(Math.gcd(13,15), true);
  });
});
