/*
Maximum Subarray Sum - Kadane's Algorithm

Given a matrix containing integers (positive, negative, and zero). 
The requirement is to find the largest sum of adjacent submatrixes 
within the original matrix.
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

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6
console.log(maxSubArray([1])); // Output: 1
console.log(maxSubArray([5,4,-1,7,8])); // Output: 23
console.log(maxSubArray([-1, -2, -3, -4])); // Output: -1
console.log(maxSubArray([0, 2, -1, 3])); // Output: 4
