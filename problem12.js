/**
 You have a string s that contains only lowercase letters. 
 Write a function that returns the longest substring with no repeating characters.

Examples

Input: s = "abcabcbb"
Output: 3
(Substring is "abc")

Input: s = "bbbbb"
Output: 1
(Substring is "b")

Input: s = "pwwkew"
Output: 3
(Substring is "wke")

Input: s = ""
Output: 0
(No characters in string)


 */

function lengthOfLongestSubstring(s) {
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

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring(""));         // Output: 0
