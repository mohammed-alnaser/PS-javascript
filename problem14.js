/**
 You have an array of integers nums. 
 Write a function that returns all possible unique permutations for this array.

The array may contain duplicate numbers, but the result must not be duplicate.

Examples:

Input: nums = [1, 1, 2]
Output:

csharp
Copy the code
[
[1, 1, 2],[1, 2, 1],[2, 1, 1]]

Input: nums = [1, 2, 3]
Output:

csharp
Copy the code
[[1, 2, 3],[1, 3, 2],[2, 1, 3],[2, 3, 1],[3, 1, 2],[3, 2, 1]] 

 */

function permuteUnique(arr) {
    const results = [];
    arr.sort((a, b) => a - b); 

    function backtrack(path, used) {
        if (path.length === arr.length) {
            results.push([...path]);
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            if (used[i] || (i > 0 && arr[i] === arr[i - 1] && !used[i - 1])) {
                continue;
            }

            used[i] = true;
            path.push(arr[i]);

            backtrack(path, used);

            path.pop();
            used[i] = false;
        }
    }

    backtrack([], Array(arr.length).fill(false));
    return results;
}

console.log(permuteUnique([1, 1, 2])); // Output: [[1, 1, 2], [1, 2, 1], [2, 1, 1]]

console.log(permuteUnique([1, 2, 3])); // Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
