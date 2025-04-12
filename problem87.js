/**Alien Dictionary (Topological Sort) – Given a list of words, return the correct order of letters.
 */

function alienOrder(words) {
    const graph = new Map();
    const inDegree = new Map();
    // Initialize inDegree and graph
    for (const word of words) {
        for (const char of word) {
            inDegree.set(char, 0);
            graph.set(char, new Set());
        }
    }
    // Build graph and inDegree
    for (let i = 1; i < words.length; i++) {
        const prev = words[i - 1], curr = words[i];
        if (prev.length > curr.length && prev.startsWith(curr)) return "";
        for (let j = 0; j < Math.min(prev.length, curr.length); j++) {
            const pChar = prev[j], cChar = curr[j];
            if (pChar !== cChar) {
                if (!graph.get(pChar).has(cChar)) {
                    graph.get(pChar).add(cChar);
                    inDegree.set(cChar, inDegree.get(cChar) + 1);
                }
                break;
            }
        }
    }
    // Topological sort
    const queue = [];
    for (const [char, degree] of inDegree) {
        if (degree === 0) queue.push(char);
    }
    let result = '';
    while (queue.length) {
        const char = queue.shift();
        result += char;
        for (const neighbor of graph.get(char)) {
            inDegree.set(neighbor, inDegree.get(neighbor) - 1);
            if (inDegree.get(neighbor) === 0) queue.push(neighbor);
        }
    }
    return result.length === inDegree.size ? result : "";
}