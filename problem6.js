/*

A perfect number is a number that is equal to the sum of all its
 positive divisors (except itself).
For example, 6 is a perfect number because its divisors are 1, 2, and 3, 
and their sum is 6.

Required: Write a function that checks whether a given number is a perfect number or not.

For example:
Input: 28
Output: true
(Because 28 is a perfect number: its divisors are 1, 2, 4, 7, and 14, and their sum is 28).

Input: 15
Output: false

*/

function isPerfectNumber(num) {
  if (num <= 1) return false;

  let sum = 0;

  // Find and add the factors
  
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;

      if (i !== 1 && i !== num / i) {
        sum += num / i;
      }
    }
  }
  return sum === num;

}
console.log(isPerfectNumber(28));    //true
console.log(isPerfectNumber(20));   //false

