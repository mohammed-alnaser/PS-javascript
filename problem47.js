/*
You have an array of numbers in ascending order but there is one
 missing number in this array. Your task is to find this missing number.

*/

function findMissingNumber(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i] + 1;
        }
    }
    return null;
}

console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8]));  // 5
console.log(findMissingNumber([10, 11, 12, 14, 15]));    // 13
console.log(findMissingNumber([100, 101, 102, 103, 105])); // 104
