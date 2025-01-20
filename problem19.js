/**
 
Write the findMissingNumber function to find the missing number in an array containing
𝑛
n numbers, consisting of numbers from
1
1 to
𝑛
+
1
n+1.
The array is assumed to contain all numbers except one missing number.

Input:
nums: An array containing integers from
1
1 to
𝑛
+
1
n+1 with one missing number.

Output:
The missing number.
Examples:

Input: nums = [3, 7, 1, 2, 8, 4, 5]
Output: 6

Input: nums = [1, 2, 4, 5, 6]
Output: 3

 */

function findMissingNumber(nums) {
    const n = nums.length + 1; 
    const expectedSum = (n * (n + 1)) / 2; 
    const actualSum = nums.reduce((acc, num) => acc + num, 0);

    return expectedSum - actualSum; 
}


console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])); // Output: 6
console.log(findMissingNumber([1, 2, 4, 5, 6]));       // Output: 3
