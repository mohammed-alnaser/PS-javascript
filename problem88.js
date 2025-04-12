/**Course Schedule (Cycle Detection) – Check if you can finish all courses given prerequisites.
 */

function canFinish(numCourses, prerequisites) {
    const graph = Array(numCourses).fill().map(() => []);
    const inDegree = Array(numCourses).fill(0);
    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course);
        inDegree[course]++;
    }
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    let count = 0;
    while (queue.length) {
        const course = queue.shift();
        count++;
        for (const neighbor of graph[course]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) queue.push(neighbor);
        }
    }
    return count === numCourses;
}