/*
Given an integer n, find its inverse.

If the number is negative, it remains negative after the inversion.
The extra zeros at the beginning must be removed after the inversion.
*/


function reverseNumber(n) {
    let isNegative = n < 0;
    let reversedStr = Math.abs(n).toString().split('').reverse().join('');
    let reversedNum = parseInt(reversedStr, 10);
    
    return isNegative ? -reversedNum : reversedNum;
}


console.log(reverseNumber(12345)); // Output: 54321
console.log(reverseNumber(-9870)); // Output: -789
console.log(reverseNumber(1200)); // Output: 21
console.log(reverseNumber(0)); // Output: 0
console.log(reverseNumber(-100)); // Output: -1
