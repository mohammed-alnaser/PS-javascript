/*

You are given an array of integers containing consecutive numbers
 from 1 to n but one number is missing. The task is to find this
  missing number with the best possible efficiency (O(n)).

*/


function findMissingNumber(nums) {
    let n = nums.length + 1; 
    let expectedSum = (n * (n + 1)) / 2; 
    let actualSum = nums.reduce((sum, num) => sum + num, 0);
    
    return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6])); // Output: 3
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])); // Output: 6
console.log(findMissingNumber([1, 3])); // Output: 2
console.log(findMissingNumber([2, 3, 4, 5, 6])); // Output: 1
