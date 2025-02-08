/*
Given an array nums containing integers where each number appears twice
 except for two numbers that appear once. Required: Find the two unique
  numbers that appear once using high efficiency.
*/

function singleNumber(nums) {
    let xorResult = 0;

    for (let num of nums) {
        xorResult ^= num;
    }

    let diffBit = xorResult & -xorResult;
    
    let num1 = 0, num2 = 0;

    for (let num of nums) {
        if ((num & diffBit) === 0) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    }

    return [num1, num2];
}

console.log(singleNumber([1, 2, 1, 3, 2, 5])); // Output: [3, 5]
console.log(singleNumber([-1, 0, 1, 0, -1, 2])); // Output: [1, 2]
console.log(singleNumber([4, 7, 4, 9])); // Output: [7, 9]
