/*
You have a two-dimensional array sorted in ascending order, 
where each row is sorted in ascending order, and each column
 is also sorted in ascending order. Your task is to write an
  efficient search function to find a specific number within
   this array. If it finds it, return true; otherwise, return false.
*/


function searchMatrix(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;
    
    let row = 0; 
    let col = matrix[0].length - 1; 

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) return true;
        else if (matrix[row][col] > target) col--; 
        else row++; 
    }
    
    return false; 
}

let matrix = [
    [1,  4,  7, 11, 15],
    [2,  5,  8, 12, 19],
    [3,  6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];

console.log(searchMatrix(matrix, 5));  // 🔹 Output: true
console.log(searchMatrix(matrix, 20)); // 🔹 Output: false
