/*
You have an array of integers, where each number appears twice except for 
one number that appears only once. Your task is to find this unique number 
in the best possible way in terms of performance.

*/

function findUniqueNumber(nums) {
    let unique = 0;
    
    for (let num of nums) {
        unique ^= num; 
    }
    
    return unique;
}

console.log(findUniqueNumber([4, 1, 2, 1, 2])); // 4
console.log(findUniqueNumber([2, 2, 3, 5, 5])); // 3
console.log(findUniqueNumber([7])); // 7
