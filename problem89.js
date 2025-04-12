/**Word Ladder (BFS Shortest Path) – Find the shortest transformation sequence from beginWord to endWord.
 */

function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    const queue = [[beginWord, 1]];
    while (queue.length) {
        const [word, steps] = queue.shift();
        if (word === endWord) return steps;
        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < 26; j++) {
                const newWord = word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);
                if (wordSet.has(newWord)) {
                    wordSet.delete(newWord);
                    queue.push([newWord, steps + 1]);
                }
            }
        }
    }
    return 0;
}