/**
 Longest Consecutive Sequence 

 Given an unsorted array of integers, find the length of the longest 
 consecutive elements sequence.
Your algorithm should run in O(n) time complexity.


 */

function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    let numSet = new Set(nums);
    let maxLength = 0;

    for (let num of numSet) {
        if (!numSet.has(num - 1)) { 
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            maxLength = Math.max(maxLength, currentStreak);
        }
    }

    return maxLength;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 1, 9])); // Output: 10
console.log(longestConsecutive([1, 9, 3, 10, 2, 20])); // Output: 3
