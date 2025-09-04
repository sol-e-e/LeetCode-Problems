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

function minDepth(root: TreeNode | null): number {
    if (root === null) return 0;

    const leftDepth = minDepth(root.left) + 1;
    const rightDepth = minDepth(root.right) + 1;

    if (!root.left) return rightDepth;
    if (!root.right) return leftDepth;

    return Math.min(leftDepth, rightDepth);
};