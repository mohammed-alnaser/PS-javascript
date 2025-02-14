/*
You are given an integer n.

The question is to convert n to 0 in the fewest possible steps 
according to the following rules:

If n is even, divide it by 2.

If n is odd, subtract 1 from it.

Continue until n reaches 0.
The question is to return the number of steps needed to convert n to 0

*/



function reduceToZero(n) {
    let steps = 0;

    while (n > 0) {
        if (n % 2 === 0) {
            n /= 2;
        } else {
            n -= 1;
        }
        steps++;
    }

    return steps;
}

console.log(reduceToZero(14)); // Output: 6
console.log(reduceToZero(8));  // Output: 4
console.log(reduceToZero(25)); // Output: 6
console.log(reduceToZero(1));  // Output: 1
