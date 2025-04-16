/**N-Queens Problem – Place n queens on an n x n chessboard such that no two attack each other.
 */

function solveNQueens(n) {
    const res = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));
    const cols = new Set(), diag1 = new Set(), diag2 = new Set();
    const backtrack = (row) => {
        if (row === n) {
            res.push(board.map(r => r.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diag1.has(row + col) || diag2.has(row - col)) continue;
            board[row][col] = 'Q';
            cols.add(col); diag1.add(row + col); diag2.add(row - col);
            backtrack(row + 1);
            board[row][col] = '.';
            cols.delete(col); diag1.delete(row + col); diag2.delete(row - col);
        }
    };
    backtrack(0);
    return res;
}