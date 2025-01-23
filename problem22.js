/**
 Write an isValidSudoku function that checks if a
9×9
9×9 Sudoku grid is valid.

Conditions:
A valid Sudoku grid:
Each row contains the numbers 1 through 9 (no repetitions).
Each column contains the numbers 1 through 9 (no repetitions).
Each
3×3
3×3 square contains the numbers 1 through 9 (no repetitions).
Empty cells are denoted by ".".
Input:
board: A 2D array
9×9
9×9.
Output:
true if the grid is valid.
false if it is invalid
 */

function isValidSudoku(board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const value = board[i][j];
            if (value === ".") continue;

            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if (rows[i].has(value) || cols[j].has(value) || boxes[boxIndex].has(value)) {
                return false;
            }

            rows[i].add(value);
            cols[j].add(value);
            boxes[boxIndex].add(value);
        }
    }

    return true;
}


const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

console.log(isValidSudoku(board)); // Output: true
