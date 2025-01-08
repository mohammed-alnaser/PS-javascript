/*

You have a string that contains only lowercase letters of the English alphabet. 
You need to write a function to rearrange the letters in the string so that all 
repeated letters are as far apart as possible.

If this is not possible, return an empty string ("").
For example:
Input: "aab"
Output: "aba"

Input: "aaab"
Output: ""

*/


function reorganizeString(s) {
    const freqMap = new Map();

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    const maxHeap = [];
    for (let [char, freq] of freqMap) {
        maxHeap.push([char, freq]);
    }
    maxHeap.sort((a, b) => b[1] - a[1]); 

    let prevChar = null, prevFreq = 0;
    let result = "";

    while (maxHeap.length > 0) {
        const [char, freq] = maxHeap.shift(); 
        result += char;

        if (prevChar && prevFreq > 0) {
            maxHeap.push([prevChar, prevFreq]);
            maxHeap.sort((a, b) => b[1] - a[1]);
        }

        prevChar = char;
        prevFreq = freq - 1;
    }

    return result.length === s.length ? result : "";
}


console.log(reorganizeString("aab"));  // Output: "aba"
console.log(reorganizeString("aaab")); // Output: ""
console.log(reorganizeString("aaabbb")); // Output: "ababab"
