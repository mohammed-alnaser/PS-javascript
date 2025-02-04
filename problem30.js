/*
Given a string of words, you are asked to group the words that are anagrams into the same group.
 An anagram is when two words have the same letters but in a different order.

*/

function groupAnagrams(words) {
    let map = new Map();

    for (let word of words) {
        let sortedWord = word.split('').sort().join('');  
        if (!map.has(sortedWord)) {
            map.set(sortedWord, []);
        }
        map.get(sortedWord).push(word);
    }

    return Array.from(map.values());
}


console.log(groupAnagrams(["listen", "silent", "enlist", "rat", "tar", "art", "evil", "vile", "live"]));
// Output: [["listen", "silent", "enlist"], ["rat", "tar", "art"], ["evil", "vile", "live"]]

console.log(groupAnagrams(["abc", "bca", "cab", "xyz", "yxz", "zxy", "hello"]));
// Output: [["abc", "bca", "cab"], ["xyz", "yxz", "zxy"], ["hello"]]

console.log(groupAnagrams(["cat", "tac", "act", "dog", "god", "odg"]));
// Output: [["cat", "tac", "act"], ["dog", "god", "odg"]]
