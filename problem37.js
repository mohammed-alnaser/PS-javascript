/*
You have a maze in the form of a binary grid of 0's and 1's.

0 represents an open path
1 represents an impassable wall
The task is to find the shortest path from the upper left corner (0,0) 
to the lower right corner (n-1, m-1) if possible, otherwise return -1.

*/

function shortestPath(grid) {
    let n = grid.length, m = grid[0].length;
    if (grid[0][0] === 1 || grid[n - 1][m - 1] === 1) return -1; 

    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let queue = [[0, 0, 1]]; 
    let visited = new Set();
    visited.add(`0,0`);

    while (queue.length) {
        let [x, y, steps] = queue.shift();

        if (x === n - 1 && y === m - 1) return steps; 

        for (let [dx, dy] of directions) {
            let nx = x + dx, ny = y + dy;

            if (nx >= 0 && ny >= 0 && nx < n && ny < m && grid[nx][ny] === 0 && !visited.has(`${nx},${ny}`)) {
                queue.push([nx, ny, steps + 1]);
                visited.add(`${nx},${ny}`);
            }
        }
    }

    return -1; 
}

console.log(shortestPath([
  [0, 0, 1, 0],
  [1, 0, 1, 0],
  [0, 0, 0, 0],
  [1, 1, 0, 0]
])); // Output: 6

console.log(shortestPath([
  [0, 1],
  [1, 0]
])); // Output: -1
