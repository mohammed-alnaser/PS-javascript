/**
 
Write the longestConsecutiveSequence function to find the length of 
the longest consecutive sequence of numbers in an unsorted array.

Input:
nums: An array of integers.
Output:
The integer representing the length of the longest consecutive sequence.
Notes:
The array can contain duplicate numbers.
The consecutive sequence must be sorted in ascending order.
Examples:

Input: nums = [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive sequence is [1, 2, 3, 4].

Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
Output: 9
Explanation: The longest consecutive sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8].
 */

function longestConsecutiveSequence(nums) {
    const numSet = new Set(nums);
    let longestStreak = 0;

    for (const num of numSet) {
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

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])); // Output: 4
console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // Output: 9
