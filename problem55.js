/*
You have an array of positive integers, your task is to arrange
 the numbers to form the largest possible number when combined 
 together as a string.
*/

function largestNumber(nums) {
    nums.sort((a, b) => ("" + b + a) - ("" + a + b));
    
    let result = nums.join('');

    return result[0] === '0' ? '0' : result;
}

console.log(largestNumber([3, 30, 34, 5, 9])); // "9534330"
console.log(largestNumber([54, 546, 548, 60])); // "6054854654"
console.log(largestNumber([1, 20, 23, 4, 8])); // "8423201"
console.log(largestNumber([0, 0])); // "0"
