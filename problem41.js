/*

You are given an array of positive integers.

At each step, you subtract the smallest non-zero number from all the non-zero numbers in the array.
The question is to find the minimum number of steps to make all the values ​​in the array zero.
*/

function minStepsToZero(nums) {
    let uniquePositiveNumbers = new Set(nums.filter(num => num > 0));
    return uniquePositiveNumbers.size;
}

console.log(minStepsToZero([3, 2, 2, 4])); // Output: 2
console.log(minStepsToZero([1, 5, 0, 3, 5])); // Output: 3
console.log(minStepsToZero([7, 7, 7, 7])); // Output: 1
console.log(minStepsToZero([1, 2, 3, 4, 5])); // Output: 5
