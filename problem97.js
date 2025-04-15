/**Single Number III – Find two numbers that appear once (others appear twice).
 */

function singleNumber(nums) {
    let xor = 0;
    for (const num of nums) xor ^= num;
    const diff = xor & -xor;
    let a = 0, b = 0;
    for (const num of nums) {
        if (num & diff) a ^= num;
        else b ^= num;
    }
    return [a, b];
}