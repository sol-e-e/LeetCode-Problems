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

function sumEvenGrandparent(root: TreeNode | null): number {
    let sum = 0;

    function traversal(node: TreeNode | null, grandparent: TreeNode | null, parent: TreeNode | null) {
        if (!node) return;

        if (grandparent && grandparent.val % 2 === 0) {
            sum += node.val;
        }

        traversal(node.left, parent, node);
        traversal(node.right, parent, node);
    }

    traversal(root, null, null);

    return sum;
};