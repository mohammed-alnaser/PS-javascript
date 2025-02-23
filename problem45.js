/*
You are given an unsorted array of integers, and asked to find
 the length of the longest consecutive sequence of integers.

The solution should be O(n) efficient.

*/

function longestConsecutive(nums) {
    let numSet = new Set(nums);
    let longestStreak = 0;

    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
console.log(longestConsecutive([9, 1, 4, 7, 3, 2, 8, 5, 6, 0])); // Output: 10
console.log(longestConsecutive([1, 2, 0, 1])); // Output: 3
console.log(longestConsecutive([])); // Output: 0
