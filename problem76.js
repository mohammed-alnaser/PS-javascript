/*Rotate Image (Matrix Rotation) – Rotate an n x n matrix 90 degrees clockwise in-place.
 */

function rotate(matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let row of matrix) row.reverse();
}