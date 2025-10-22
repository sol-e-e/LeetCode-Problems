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

function isBalanced(root: TreeNode | null): boolean {
    if (!root) return true;

    function getHeight(node: TreeNode | null): number {
        if (!node) return 0;

        return getHeight(node.left) + 1;
    }    

    const left = getHeight(root.left);
    const right = getHeight(root.right);

    return Math.abs(left - right) > 1 ? false : true;
};