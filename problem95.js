/**Divide Two Integers (Without Division Operator) – Implement division without /, *, or %.
 */

function divide(dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1) return 2147483647;
    let sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let quotient = 0;
    while (dividend >= divisor) {
        let temp = divisor, multiple = 1;
        while (dividend >= (temp << 1)) {
            if (temp << 1 <= 0) break; // Avoid overflow
            temp <<= 1;
            multiple <<= 1;
        }
        dividend -= temp;
        quotient += multiple;
    }
    return sign * quotient;
}