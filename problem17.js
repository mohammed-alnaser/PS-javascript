/**
 Write a function that encrypts text using the Caesar Cipher algorithm.

The algorithm rotates the characters in the text based on a certain number of positions.

Input:
s: The text to be encrypted (consists of only lowercase letters).
k: The number of positions to rotate (an integer).

Output:
The encrypted text.
Examples:
Input: s = "abc", k = 2
Output: "cde"

Input: s = "xyz", k = 3
Output: "abc"

Input: s = "hello", k = 5
Output: "mjqqt"
 */

function caesarCipher(s, k) {
    const shift = k % 26; 
    let result = '';

    for (let char of s) {
        const newCharCode = ((char.charCodeAt(0) - 97 + shift) % 26) + 97;
        result += String.fromCharCode(newCharCode);
    }

    return result;
}

console.log(caesarCipher("abc", 2)); // Output: "cde"
console.log(caesarCipher("xyz", 3)); // Output: "abc"
console.log(caesarCipher("hello", 5)); // Output: "mjqqt"
console.log(caesarCipher("mohammed alnaser", 10)); // Output: "wyrkwwon^kvxkcob"
