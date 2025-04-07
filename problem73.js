/*
Minimum Window Substring – Find the smallest substring in s that contains all characters of t.

*/

function minWindow(s, t) {
    const map = new Map();
    for (const char of t) map.set(char, (map.get(char) || 0) + 1);
    let left = 0, count = t.length, minLen = Infinity, minStart = 0;
    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            if (map.get(s[right]) > 0) count--;
            map.set(s[right], map.get(s[right]) - 1);
        }
        while (count === 0) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }
            if (map.has(s[left])) {
                map.set(s[left], map.get(s[left]) + 1);
                if (map.get(s[left]) > 0) count++;
            }
            left++;
        }
    }
    return minLen === Infinity ? "" : s.substr(minStart, minLen);
}