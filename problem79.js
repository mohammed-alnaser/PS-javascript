/*Shortest Path in Binary Matrix – Find the shortest path from (0,0) to (n-1,n-1) in a binary matrix.
 */

function shortestPathBinaryMatrix(grid) {
    if (grid[0][0] === 1) return -1;
    const n = grid.length;
    const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    const queue = [[0, 0, 1]];
    grid[0][0] = 1;
    while (queue.length) {
        const [x, y, dist] = queue.shift();
        if (x === n - 1 && y === n - 1) return dist;
        for (const [dx, dy] of dirs) {
            const nx = x + dx, ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < n && ny < n && grid[nx][ny] === 0) {
                grid[nx][ny] = 1;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
    return -1;
}