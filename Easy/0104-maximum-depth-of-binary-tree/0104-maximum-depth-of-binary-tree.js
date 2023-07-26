/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function(root) {
    let depth = 0;
    DFS(root);
    function DFS(root, nodeDepth = 1) {
        if (!root) return;
        if (nodeDepth > depth) depth = nodeDepth;
        DFS(root.left, nodeDepth + 1);
        DFS(root.right, nodeDepth + 1);
    }
    return depth;
};