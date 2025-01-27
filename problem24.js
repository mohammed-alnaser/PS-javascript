/*
Write a threeSum function that takes an array of integers nums and a target integer target ,
 and finds all 3-digit combinations in the array whose sum is equal to the target.

Input:
nums: An array of integers (can contain negative numbers).
target: An integer representing the target sum.
Output:
An array containing all triplets that satisfy the condition.
Each triplet must be sorted in ascending order, and the results must not be repeated.

*/

function threeSum(nums, target) {
    nums.sort((a, b) => a - b); 
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === target) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum < target) {
                left++; 
            } else {
                right--; 
            }
        }
    }

    return result;
}


console.log(threeSum([-1, 0, 1, 2, -1, -4], 0)); // Output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([1, 2, -2, -1], 1)); // Output: [[-2, 1, 2]]
console.log(threeSum([0, 0, 0, 0], 0)); // Output: [[0, 0, 0]]
