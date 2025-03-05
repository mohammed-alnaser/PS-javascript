/*
You are in a maze in the form of a binary matrix (0 and 1) where:

0 represents a path you can take.

1 represents a barrier you cannot pass through.

You have a fixed starting point (0,0) and need to reach the nearest exit (i.e. a location containing 0 and located on the outer edge of the matrix).
You can only move in four directions: up, down, left, right.
Calculate the minimum number of steps required to reach the nearest exit, or -1 if exit is not possible.


*/


function shortestExit(maze) {
    let rows = maze.length, cols = maze[0].length;
    let directions = [[0,1], [1,0], [0,-1], [-1,0]]; 
    let queue = [[0, 0, 0]]; 
    
    if (maze[0][0] === 1) return -1; 
    
    let visited = new Set(["0,0"]);

    while (queue.length) {
        let [r, c, steps] = queue.shift();
        
        if ((r === 0 || c === 0 || r === rows - 1 || c === cols - 1) && (r !== 0 || c !== 0)) {
            return steps;
        }

        for (let [dr, dc] of directions) {
            let nr = r + dr, nc = c + dc;
            
            if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && maze[nr][nc] === 0 && !visited.has(`${nr},${nc}`)) {
                visited.add(`${nr},${nc}`);
                queue.push([nr, nc, steps + 1]);
            }
        }
    }
    
    return -1; 
}

let maze1 = [
  [0, 1, 1, 1, 1],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0]
];

console.log(shortestExit(maze1)); // 7

let maze2 = [
  [0, 1, 1],
  [1, 1, 1],
  [1, 1, 0]
];

console.log(shortestExit(maze2)); // -1