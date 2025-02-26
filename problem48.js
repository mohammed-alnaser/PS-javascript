/*
A number is said to be happy if you repeatedly replace it with the sum
 of the squares of its digits and you end up with 1. If you go into an
  infinite loop and don't get to 1, it's not a happy number.
*/

function isHappyNumber(n) {
    let seen = new Set(); 

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = n.toString().split('').reduce((sum, digit) => sum + Math.pow(parseInt(digit), 2), 0);
    }

    return n === 1;
}

console.log(isHappyNumber(19));  // true
console.log(isHappyNumber(20));  // false
console.log(isHappyNumber(7));   // true
console.log(isHappyNumber(2));   // false
