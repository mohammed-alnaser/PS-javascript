/**
 
You have an array of integers nums sorted in ascending order (may contain duplicate values). 
Write a function that returns all unique sets of three numbers whose sum is zero.

Requirements:

The result must not contain duplicate sets.
The array can contain positive, negative, and zero numbers.

Examples:

Input: nums = [-1, 0, 1, 2, -1, -4]
Output:

[ [-1, -1, 2],[-1, 0, 1]]

 */

function threeSum(arr) {
    const result = [];
    arr.sort((a, b) => a - b); 

    for (let i = 0; i < arr.length - 2; i++) {
        
        if (i > 0 && arr[i] === arr[i - 1]) continue;

        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];

            if (sum === 0) {
                result.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;

         
                while (left < right && arr[left] === arr[left - 1]) left++;
                while (left < right && arr[right] === arr[right + 1]) right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]

console.log(threeSum([0, 0, 0])); // Output: [[0, 0, 0]]

console.log(threeSum([])); // Output: []
