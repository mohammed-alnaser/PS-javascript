/*
Given an array of integers arranged in ascending order, 
you are asked to rearrange them so that each number is larger than
 the number immediately following it and smaller than the number immediately preceding it, 
 i.e. a wave-like arrangement.
*/
function waveSort(nums) {
    for (let i = 0; i < nums.length - 1; i += 2) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];  
    }
    return nums;
}

console.log(waveSort([1, 2, 3, 4, 5, 6])); // Output: [2, 1, 4, 3, 6, 5]
console.log(waveSort([10, 20, 30, 40, 50])); // Output: [20, 10, 40, 30, 50]
console.log(waveSort([3, 6, 5, 10, 7, 20])); // Output: [6, 3, 10, 5, 20, 7]
console.log(waveSort([4, 1, 7, 3, 9])); // Output: [1, 4, 3, 7, 9]
