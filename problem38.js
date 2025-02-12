/*

You are given an array of integers containing positive, 
negative, and zero numbers. Your task is to find the largest
 possible continuous product among all the sub-items of the array.

 */

 function maxProduct(nums) {
    if (nums.length === 0) return 0;

    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let tempMax = maxProd;
        maxProd = Math.max(nums[i], nums[i] * maxProd, nums[i] * minProd);
        minProd = Math.min(nums[i], nums[i] * tempMax, nums[i] * minProd);
        result = Math.max(result, maxProd);
    }

    return result;
}

console.log(maxProduct([2, 3, -2, 4])); // Output: 6
console.log(maxProduct([-2, 0, -1])); // Output: 0
console.log(maxProduct([-2, 3, -4])); // Output: 24
console.log(maxProduct([1, -2, -3, 4])); // Output: 12
