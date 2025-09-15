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

function deepestLeavesSum(root: TreeNode | null): number {
    function height(node: TreeNode | null) {
        if (!node) return 0;

        return 1 + Math.max(height(node.left), height(node.right));
    }

    const maxHeight = height(root);

    function sum(node: TreeNode | null, height: number) {
        if (!node) return 0;
        if (height === maxHeight) {
            return node.val;
        }

        return sum(node.left, height + 1) + sum(node.right, height + 1);
    }

    return sum(root, 1);
};