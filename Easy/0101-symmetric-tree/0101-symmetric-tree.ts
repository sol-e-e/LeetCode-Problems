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

function isSymmetric(root: TreeNode | null): boolean {
    function isMirror (p: TreeNode | null, q: TreeNode | null) {
        if (!p && !q) return true;
        else if (!p || !q) return false;
        
        return p.val === q.val ? isMirror(p.left, q.right) && isMirror(p.right, q.left) : false;
    }

    return isMirror(root.left, root.right);
};