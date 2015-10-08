/**
This method find the greatest common denominator of two objects using the modules axiom.
@param {Number} The higher number of the two parameters.
@param {Number} The lower number of the two parameters.
*/
Math.gcd = function(a, b) {
  return b === 0 ? a : Math.gcd(b, a % b);
}
