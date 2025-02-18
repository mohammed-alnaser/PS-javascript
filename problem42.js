/*

You are given an array containing positive, negative, 
and zero integers. The task is to find the smallest positive
 integer that is not present in the array, using O(n) time complexity and O(1) space.
*/

function firstMissingPositive(nums) {
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0 || nums[i] > n) {
            nums[i] = n + 1; 
        }
    }

    for (let i = 0; i < n; i++) {
        let num = Math.abs(nums[i]);
        if (num <= n && nums[num - 1] > 0) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }

    return n + 1;
}

console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 2
console.log(firstMissingPositive([1, 2, 0])); // Output: 3
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // Output: 1
console.log(firstMissingPositive([1, 2, 3, 4, 5])); // Output: 6
