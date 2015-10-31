"use strict";

/**
This method find the greatest common denominator of two objects using the modules axiom.
@param {Number} The higher number a, of the two parameters where a > 0
@param {Number} The lower number b, of the two parameters where b > 0
*/
Math.gcd = function (a, b) {
  return b === 0 ? a : Math.gcd(b, a % b);
};
"use strict";

/**
This function is known as the sieve of Eratosthenese https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes.
This function will find and return an Array of the prime numbers below a certain integer number n where n > 2.
@param {Number} An integer number greater then 2
*/
Math.soe = function (n) {
  var possibilities = {};
  for (var i = 2; i <= n; i++) {
    //First we create the array of possible numbers
    possibilities[i] = i;
  }
  //We only go here until i * i < n since earlier passes are eliminating based on this criteria. We can assume that i * i must be less then n to even begin to be compared.
  for (var i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (possibilities[i] !== 0) {
      var count = i * i;
      while (count <= n) {
        possibilities[count] = 0;
        count += i;
      }
    }
  }
  var primes = [];
  for (var i = 2; i < n; i++) {
    if (possibilities[i] != 0) {
      primes.push(possibilities[i]);
    }
  }
  return primes;
};
//# sourceMappingURL=all.js.map
