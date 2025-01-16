/**
 You have an array of integers nums, and you need to 
 write a function that returns the longest increasing substring (LIS) in length.

Examples:

Input: nums = [10, 9, 2, 5, 3, 7, 101, 18]
Output: 4
(The substring is [2, 3, 7, 101])

Input: nums = [0, 1, 0, 3, 2, 3]
Output: 4
(The substring is [0, 1, 2, 3])

Input: nums = [7, 7, 7, 7, 7]
Output: 1
(The substring is [7])
 */


function lengthOfLIS(arr) {
    const dp = Array(arr.length).fill(1);  

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp); 
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // Output: 4
console.log(lengthOfLIS([7, 7, 7, 7, 7])); // Output: 1
