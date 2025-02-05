/*
Given a two-dimensional matrix sorted such that:

Each row is sorted in ascending order from left to right.

Each column is sorted in ascending order from top to bottom.
 Required: Write a function that efficiently searches for an element target in this matrix.
*/


function searchMatrix(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;
    
    let row = 0, col = matrix[0].length - 1;

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return true; 
        } else if (matrix[row][col] > target) {
            col--; 
        } else {
            row++; 
        }
    }

    return false; 
}

let matrix1 = [
  [1, 4, 7, 11],
  [2, 5, 8, 12],
  [3, 6, 9, 16],
  [10, 13, 14, 17]
];

console.log(searchMatrix(matrix1, 5)); // Output: true
console.log(searchMatrix(matrix1, 15)); // Output: false
console.log(searchMatrix(matrix1, 14)); // Output: true
console.log(searchMatrix(matrix1, 1)); // Output: true
console.log(searchMatrix(matrix1, 20)); // Output: false
