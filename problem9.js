/*

You have an array of integers nums that contains positive and negative numbers.
 Write a function that returns the greatest continuous product of a set of 
 elements in the array.

Conditions:
The array contains at least one element.
Examples:

Input: nums = [2, 3, -2, 4]
Output: 6
(Product of [2, 3])

Input: nums = [-2, 0, -1]
Output: 0
(Product of [0])

Input: nums = [-2, 3, -4]
Output: 24
(Product of [-2, 3, -4])

*/

function maxProduct(arr) {
    if (arr.length === 0) return 0;

    let maxProduct = arr[0];
    let currentMax = arr[0];
    let currentMin = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let temp = currentMax;

        currentMax = Math.max(arr[i], arr[i] * currentMax, arr[i] * currentMin);
        currentMin = Math.min(arr[i], arr[i] * temp, arr[i] * currentMin);

        maxProduct = Math.max(maxProduct, currentMax);
    }

    return maxProduct;
}

console.log(maxProduct([2, 3, -2, 4]));  // Output: 6
console.log(maxProduct([-2, 0, -1]));    // Output: 0
console.log(maxProduct([-2, 3, -4]));    // Output: 24
console.log(maxProduct([-2, -3, -4,-5]));    // Output: 120
console.log(maxProduct([2, 3, 4,6]));    // Output: 144
