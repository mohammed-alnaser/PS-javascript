/*

Write a reverseString function that reverses a string.

Input:
A text s that consists of only lowercase letters.

Output:
The text reversed.
Examples:

Input: s = "hello"
Output: "olleh"

Input: s = "javascript"
Output: "tpircsavaj"

*/


function reverseString(s) {
    return s.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("javascript")); // Output: "tpircsavaj"
