/*
Given an array nums containing unordered integers, 
and the required thing is to find the longest ascending sequence within it.
The sequence does not have to be contiguous, but it must be in ascending order.

Required:
Return the length of the longest ascending sequence.
*/


function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;

    let dp = new Array(nums.length).fill(1);
    let maxLength = 1;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLength = Math.max(maxLength, dp[i]);
    }

    return maxLength;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // Output: 4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // Output: 1
console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6])); // Output: 6
