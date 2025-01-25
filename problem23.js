/*


Write a function Longest Substring Without Repeats that finds 
a substring (substring) in a string that does not contain repeated characters.

Input:
s: A string that contains only a lowercase letter.

Output:
An integer representing the length of the smallest substring without repeated characters.

Examples:

s = "abcabcbb" => "abc"

s = "bbbbbb" =>"b"

s = "pwwkew" => "wake"
*/

function longestSubstringWithoutRepeating(s) {
    let maxLength = 0;
    let start = 0; 
    const charIndexMap = new Map(); 

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1; 
        }

        charIndexMap.set(char, end);

        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

console.log(longestSubstringWithoutRepeating("abcabcbb")); // Output: 3
console.log(longestSubstringWithoutRepeating("bbbbb")); // Output: 1
console.log(longestSubstringWithoutRepeating("pwwkew")); // Output: 3
console.log(longestSubstringWithoutRepeating("")); // Output: 0
console.log(longestSubstringWithoutRepeating("abcdef")); // Output: 6
