/**
This method calculates whether two numbers are relatively prime or not.
Two numbers are said to be relatively prime when their GCD is 1.
@param {Number} The higher number a, of the two parameters where a > 0
@param {Number} The lower number b, of the two parameters where b > 0
*/
Math.rlp = function(a, b) {
  return Math.gcd(a,b) === 1;
}
