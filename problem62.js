/*
You have a two-dimensional m x n grid with cells that can be:

0 (empty - walkable)

1 (barrier - impassable)

Your goal is to find the shortest path from (0,0) to (m-1, n-1), 
with only one barrier (1) possible to remove during your journey.
*/


function shortestPath(grid) {
    let m = grid.length, n = grid[0].length;
    let directions = [[0,1], [1,0], [0,-1], [-1,0]];
    
    let queue = [[0, 0, 1, 0]];
    let visited = new Set();
    visited.add(`0,0,0`);

    while (queue.length > 0) {
        let [x, y, steps, removed] = queue.shift();

        if (x === m - 1 && y === n - 1) return steps;

        for (let [dx, dy] of directions) {
            let nx = x + dx, ny = y + dy;

            if (nx >= 0 && ny >= 0 && nx < m && ny < n) {
                let newRemoved = removed + (grid[nx][ny] === 1 ? 1 : 0);

                if (newRemoved <= 1 && !visited.has(`${nx},${ny},${newRemoved}`)) {
                    visited.add(`${nx},${ny},${newRemoved}`);
                    queue.push([nx, ny, steps + 1, newRemoved]);
                }
            }
        }
    }

    return -1;
}

console.log(shortestPath([
  [0, 0, 0],
  [1, 1, 0],
  [0, 0, 0]
])); // Output: 4

console.log(shortestPath([
  [0, 1, 1],
  [1, 1, 0],
  [1, 0, 0]
])); // Output: 5

console.log(shortestPath([
  [0, 1],
  [1, 0]
])); // Output: 2
