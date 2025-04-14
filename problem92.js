/**Maximum Product Subarray – Find the contiguous subarray with the largest product.
 */

function maxProduct(nums) {
    let max = min = result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const temp = max;
        max = Math.max(nums[i], max * nums[i], min * nums[i]);
        min = Math.min(nums[i], temp * nums[i], min * nums[i]);
        result = Math.max(result, max);
    }
    return result;
}