/*
Write a trapRainWater function that calculates the amount of water that can be held between columns in an array representing the heights of the columns.

Input:
heights: An array containing non-negative integers representing the heights of the columns.

Output:
An integer representing the amount of water held.

Examples:

Input: heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
Output: 6
Explanation: The amount of water held is 6 units.

Input: heights = [4, 2, 0, 3, 2, 5]
Output: 9
Explanation: The amount of water held is 9 units.



*/

function trapRainWater(heights) {
    if (heights.length === 0) return 0;

    const n = heights.length;
    let leftMax = new Array(n).fill(0);
    let rightMax = new Array(n).fill(0);
    let waterTrapped = 0;

    leftMax[0] = heights[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], heights[i]);
    }

    rightMax[n - 1] = heights[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], heights[i]);
    }

    for (let i = 0; i < n; i++) {
        waterTrapped += Math.min(leftMax[i], rightMax[i]) - heights[i];
    }

    return waterTrapped;
}

console.log(trapRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trapRainWater([4, 2, 0, 3, 2, 5])); // Output: 9
