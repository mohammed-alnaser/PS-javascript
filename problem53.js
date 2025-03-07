/*

You have an array of integers, and your task is to rearrange them so
 that the odd numbers come first (in descending order) and the even 
 numbers come last (in ascending order).
*/


function customSortArray(arr) {
    let odd = arr.filter(num => num % 2 !== 0).sort((a, b) => b - a);
    let even = arr.filter(num => num % 2 === 0).sort((a, b) => a - b);
    
    return [...odd, ...even]; 
}

console.log(customSortArray([5, 3, 2, 8, 1, 4])); // [5, 3, 1, 2, 4, 8]
console.log(customSortArray([9, 7, 2, 6, 5])); // [9, 7, 5, 2, 6]
console.log(customSortArray([10, 20, 30, 1, 3, 5])); // [5, 3, 1, 10, 20, 30]
