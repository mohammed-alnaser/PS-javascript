/*
 Problem: Maximum Rectangle in a Binary Matrix
Given a m x n binary matrix filled with 0s and 1s,
 find the largest rectangle containing only 1s and return its area.
*/

function maximalRectangle(matrix) {
    if (!matrix.length || !matrix[0].length) return 0;
    
    let maxArea = 0;
    let heights = Array(matrix[0].length).fill(0);

    for (let row of matrix) {
        for (let i = 0; i < row.length; i++) {
            heights[i] = row[i] === "1" ? heights[i] + 1 : 0;
        }
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
}

function largestRectangleArea(heights) {
    let stack = [], maxArea = 0, i = 0;

    while (i <= heights.length) {
        let h = (i === heights.length ? 0 : heights[i]);
        while (stack.length && h < heights[stack[stack.length - 1]]) {
            let height = heights[stack.pop()];
            let width = stack.length ? i - stack[stack.length - 1] - 1 : i;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i++);
    }

    return maxArea;
}

console.log(maximalRectangle([
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
])); // Output: 6
