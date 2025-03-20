/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

*/

function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    let numSet = new Set(nums);
    let longest = 0;

    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longest = Math.max(longest, currentStreak);
        }
    }

    return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // Output: 9
console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6])); // Output: 7
console.log(longestConsecutive([1,2,0,1])); // Output: 3
console.log(longestConsecutive([])); // Output: 0
