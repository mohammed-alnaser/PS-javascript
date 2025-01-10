/**
You have an array of integers nums, and you need to 
write a function that returns all possible subsets.

The subset can be empty or contain some or all elements.
The subsets must not be duplicates. 

Input: nums = [1, 2, 3]
Output:

[  [], 
  [1], 
  [2], 
  [3], 
  [1, 2], 
  [1, 3], 
  [2, 3], 
  [1, 2, 3]
]

 */


function subsets(nums) {
    const result = [];

    function backtrack(start, current) {
        result.push([...current]);

        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);

            backtrack(i + 1, current);

            current.pop();
        }
    }

    backtrack(0, []);
    return result;
}

console.log(subsets([1, 2, 3]));  // Output: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]

console.log(subsets([0]));   // Output: [[], [0]]
