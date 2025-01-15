/*
You have an array of integers nums containing positive, negative, and zero numbers.
 Write a function that returns the largest sum of adjacent subarrays.

Examples:

Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
(The subarray is [4, -1, 2, 1])

Input: nums = [1]
Output: 1
(The subarray is [1])

Input: nums = [5, 4, -1, 7, 8]
Output: 23
(The subarray is [5, 4, -1, 7, 8])

*/

function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0]; 

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}


console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(maxSubArray([1])); // Output: 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // Output: 23
