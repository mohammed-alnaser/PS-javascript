/**Serialize and Deserialize Binary Tree – Convert a binary tree to a string and reconstruct it.
 */

function serialize(root) {
    if (!root) return 'null';
    return `${root.val},${serialize(root.left)},${serialize(root.right)}`;
}
function deserialize(data) {
    const nodes = data.split(',');
    const build = () => {
        const val = nodes.shift();
        if (val === 'null') return null;
        const node = new TreeNode(Number(val));
        node.left = build();
        node.right = build();
        return node;
    };
    return build();
}