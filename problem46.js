/*

You are given a positive integer n. Your task is to rearrange
 its digits so that you get the largest possible number by switching 
 the order of the digits.

*/



function maxPossibleNumber(n) {
    return parseInt(n.toString().split('').sort((a, b) => b - a).join(''));
}




console.log(maxPossibleNumber(213));        // 321
console.log(maxPossibleNumber(7389));       // 9873
console.log(maxPossibleNumber(123456789));  // 987654321
console.log(maxPossibleNumber(50502));      // 55200
