/**Binary Tree Maximum Path Sum – Find the maximum path sum (any node to any node).
 */

function maxPathSum(root) {
    let max = -Infinity;
    const dfs = (node) => {
        if (!node) return 0;
        const left = Math.max(0, dfs(node.left));
        const right = Math.max(0, dfs(node.right));
        max = Math.max(max, node.val + left + right);
        return node.val + Math.max(left, right);
    };
    dfs(root);
    return max;
}