/**
 
You have an array of integers nums, and you want to 
write a function that returns all possible combinations 
whose sum is equal to a specified number target.

Each number in the array can be used more than once.
The combinations can be arranged in any way,
 but the same combinations must not be repeated.

 *****************
 ex 1:
 Input:
nums = [2, 3, 6, 7], target = 7
Output:
[
  [7],
  [2, 2, 3]
]

***********
ex 2:
Input:
nums = [2, 3, 5], target = 8
Output
[
  [2, 2, 2, 2],
  [2, 3, 3],
  [3, 5]
]

 */

function combinationSum(nums, target) {
    const result = [];

    function backtrack(remaining, start, current) {
        if (remaining === 0) {
            result.push([...current]);
            return;
        }

        if (remaining < 0) return;

        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);

            backtrack(remaining - nums[i], i, current);

            current.pop();
        }
    }

    backtrack(target, 0, []);
    return result;
}

console.log(combinationSum([2, 3, 6, 7], 7)); // Output: [[7], [2, 2, 3]]

console.log(combinationSum([2, 3, 5], 8));  // Output: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]

console.log(combinationSum([2], 1));  // Output: []