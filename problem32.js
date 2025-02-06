/*
Given a string s and a string t containing a range of characters, 
the request is to find the smallest substring inside s that contains
 all the characters in t (including duplicates).

If no valid substring is found, return an empty string "".
*/

function minWindow(s, t) {
    if (s.length < t.length) return "";

    let charCount = new Map();
    for (let char of t) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    let left = 0, right = 0, minLen = Infinity, minStart = 0;
    let requiredChars = charCount.size, matchedChars = 0;
    let windowCounts = new Map();

    while (right < s.length) {
        let char = s[right];
        windowCounts.set(char, (windowCounts.get(char) || 0) + 1);
        
        if (charCount.has(char) && windowCounts.get(char) === charCount.get(char)) {
            matchedChars++;
        }

        while (matchedChars === requiredChars) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }

            let leftChar = s[left];
            windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);
            
            if (charCount.has(leftChar) && windowCounts.get(leftChar) < charCount.get(leftChar)) {
                matchedChars--;
            }
            
            left++;
        }
        
        right++;
    }

    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}

console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log(minWindow("a", "a")); // Output: "a"
console.log(minWindow("a", "aa")); // Output: ""
console.log(minWindow("AAADOBECODEBANCCAA", "ABC")); // Output: "BANC"
