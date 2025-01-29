/**
 Given two strings s and t, you need to find the shortest substring 
 in s that contains all the characters in t (including duplicates). 
 If no substring satisfies the condition, return an empty string """.

🔹 If there is more than one correct answer, 
choose the substring that appears first in s.
 */

function minWindow(s, t) {
    if (t.length > s.length) return "";

    let charCount = new Map();
    for (let char of t) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    let left = 0, right = 0, minLen = Infinity, start = 0;
    let required = charCount.size, formed = 0;
    let windowCount = new Map();

    while (right < s.length) {
        let char = s[right];
        windowCount.set(char, (windowCount.get(char) || 0) + 1);

        if (charCount.has(char) && windowCount.get(char) === charCount.get(char)) {
            formed++;
        }

        while (formed === required) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }

            let leftChar = s[left];
            windowCount.set(leftChar, windowCount.get(leftChar) - 1);

            if (charCount.has(leftChar) && windowCount.get(leftChar) < charCount.get(leftChar)) {
                formed--;
            }

            left++;
        }

        right++;
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);
}


console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log(minWindow("a", "a")); // Output: "a"
console.log(minWindow("a", "aa")); // Output: ""
