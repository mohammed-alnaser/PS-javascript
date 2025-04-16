/**Minimum Number of Flips to Make Binary String Monotone – Flip 0s and 1s to make the string non-decreasing.
 */

function minFlipsMonoIncr(s) {
    let flips = 0, ones = 0;
    for (const char of s) {
        if (char === '1') ones++;
        else flips = Math.min(flips + 1, ones);
    }
    return flips;
}