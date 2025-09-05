/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 Do not return anything, modify root in-place instead.
 */
function recoverTree(root: TreeNode | null): void {
    let first = null, second = null, prev = null;

    function traversal(node: TreeNode | null) {
        if (!node) return;

        traversal(node.left);

        if (prev && prev.val > node.val) {
            if (!first) first = prev;
            second = node;
        }

        prev = node;

        traversal(node.right);
    }

    traversal(root);

    [first.val, second.val] = [second.val, first.val];
};