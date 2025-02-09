/*
Given an array of nums in ascending order but rotated at an unknown position.

That is, part of it has moved to the end, like this:

[4, 5, 6, 7, 0, 1, 2]
Rotated from [0, 1, 2, 4, 5, 6, 7].

Required: Find target inside nums and return its index if found, otherwise return -1.
*/

function search(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1
console.log(search([1], 0)); // Output: -1
console.log(search([6, 7, 8, 1, 2, 3, 4, 5], 3)); // Output: 5
