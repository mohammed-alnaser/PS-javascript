/**Burst Balloons – Given balloons with values, burst them to maximize coins.
 */

function maxCoins(nums) {
    const n = nums.length;
    const dp = Array(n + 2).fill().map(() => Array(n + 2).fill(0));
    const padded = [1, ...nums, 1];
    for (let len = 1; len <= n; len++) {
        for (let left = 1; left <= n - len + 1; left++) {
            const right = left + len - 1;
            for (let k = left; k <= right; k++) {
                dp[left][right] = Math.max(
                    dp[left][right],
                    padded[left - 1] * padded[k] * padded[right + 1] + dp[left][k - 1] + dp[k + 1][right]
                );
            }
        }
    }
    return dp[1][n];
}