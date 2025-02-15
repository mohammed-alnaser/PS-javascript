/*
You are given an array of integers, where each number occurs twice except 
for one number that appears only once. Your task is to find this unique number
 using O(n) time efficiency and O(1) space efficiency.

*/

function singleNumber(nums) {
    let result = 0;
    
    for (let num of nums) {
        result ^= num;
    }
    
    return result;
}

console.log(singleNumber([4, 1, 2, 1, 2])); // Output: 4
console.log(singleNumber([2, 2, 3, 3, 5])); // Output: 5
console.log(singleNumber([7, 3, 5, 5, 3])); // Output: 7
