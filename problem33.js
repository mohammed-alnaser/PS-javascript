/*
Given an array nums containing positive integers, the requirement 
is to determine whether it can be divided into two equal sets of sums.

Note:

You can use each element only once.
An array can have multiple elements, but there must be equal division.

*/

function canPartition(nums) {
    let sum = nums.reduce((acc, num) => acc + num, 0);
    
    if (sum % 2 !== 0) return false;
    
    let target = sum / 2;
    let dp = new Array(target + 1).fill(false);
    dp[0] = true;

    for (let num of nums) {
        for (let j = target; j >= num; j--) {
            dp[j] = dp[j] || dp[j - num];
        }
    }

    return dp[target];
}

console.log(canPartition([1, 5, 11, 5])); // Output: true
console.log(canPartition([1, 2, 3, 5])); // Output: false
console.log(canPartition([3, 3, 3, 3, 4, 5])); // Output: true
console.log(canPartition([2, 2, 3, 5])); // Output: false
