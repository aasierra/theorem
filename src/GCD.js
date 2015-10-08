/**
This method find the greatest common denominator of two objects using the modules axiom.
@param {Number} The higher number a, of the two parameters where a > 0
@param {Number} The lower number b, of the two parameters where b > 0
*/
Math.gcd = function(a, b) {
  return b === 0 ? a : Math.gcd(b, a % b);
}
