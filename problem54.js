/*
You have an array of integers, where each number appears twice except

 for one number that appears only once. Your task is to find this 
 unique number using highly efficient code.

*/

function findUniqueNumber(arr) {
    return arr.reduce((acc, num) => acc ^ num, 0);
}

console.log(findUniqueNumber([4, 1, 2, 1, 2])); // 4
console.log(findUniqueNumber([2, 2, 3, 4, 3])); // 4
console.log(findUniqueNumber([7, 3, 5, 3, 5])); // 7
