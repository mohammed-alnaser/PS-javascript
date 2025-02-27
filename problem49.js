/*


You have an array of integers, where each number appears twice except
 for one number that appears only once. Your task is to find this unique 
 number with the best possible performance.

*/

// Using XOR best performance  
function findUniqueNumber(nums) {
    return nums.reduce((acc, num) => acc ^ num, 0);
}

console.log(findUniqueNumber([4, 1, 2, 1, 2]));  // 4
console.log(findUniqueNumber([2, 2, 3, 4, 4]));  // 3
console.log(findUniqueNumber([7, 3, 5, 3, 7]));  // 5
