let soe = require("../src/soe.js");
let expect = require('chai').expect;
let assert = require('assert');
describe("Testing Siv of Eratosthenese", () => {
  it('should return 2,3,5,7 for 10', () => {
    assert.equal(JSON.stringify(Math.soe(10)), JSON.stringify([2, 3, 5, 7]));
  });
});
