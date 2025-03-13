/*
You have an array containing an integer record, each number repeated twice, 
with one number appearing only once.
Your task is to find this unique number in an efficient manner.

 Do not use sort() or nested loops. 

*/

function findUnique(arr) {
    let unique = 0;
    
    for (let num of arr) {
        unique ^= num; 
    }
    
    return unique;
}

console.log(findUnique([2, 3, 5, 3, 2])); // Output: 5
console.log(findUnique([7, 8, 9, 8, 7])); // Output: 9
