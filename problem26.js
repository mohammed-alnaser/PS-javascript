/*

You have a grid (m x n) that represents a path starting at the corner 
(0,0) (top left) and ending at (m-1, n-1) (bottom right). 
You can only move down or right at each step.

Required: Find the number of different possible ways to get from start to finish.

*/

function uniquePaths(m, n) {
    let dp = Array(m).fill().map(() => Array(n).fill(1));

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
}

console.log(uniquePaths(3, 7)); // Output: 28
console.log(uniquePaths(3, 3)); // Output: 6
console.log(uniquePaths(2, 2)); // Output: 2
console.log(uniquePaths(1, 10)); // Output: 1
console.log(uniquePaths(10, 10)); // Output: 48620
