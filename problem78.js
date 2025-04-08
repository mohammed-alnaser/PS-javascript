/*Sudoku Solver – Solve a given Sudoku puzzle (backtracking).
 */

function solveSudoku(board) {
    solve(board);
}
function solve(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(board, i, j, num.toString())) {
                        board[i][j] = num.toString();
                        if (solve(board)) return true;
                        board[i][j] = '.';
                    }
                }
                return false;
            }
        }
    }
    return true;
}
function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num || board[i][col] === num || board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + (i % 3)] === num) return false;
    }
    return true;
}