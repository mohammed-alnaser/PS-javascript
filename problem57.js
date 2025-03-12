/*

You have an array of integers, and you need to rearrange them so that all 
odd numbers appear first, followed by all even numbers, while maintaining 
the relative order within each array.

Do not use the sort() function. 

*/

function rearrangeArray(arr) {
    let odd = [];
    let even = [];
    
    for (let num of arr) {
        if (num % 2 === 0) even.push(num);
        else odd.push(num);
    }
    
    return [...odd, ...even]; 
}

console.log(rearrangeArray([3, 1, 2, 4, 7, 6])); // Output: [3, 1, 7, 2, 4, 6]
console.log(rearrangeArray([8, 5, 11, 14, 3, 7])); // Output: [5, 11, 3, 7, 8, 14]
