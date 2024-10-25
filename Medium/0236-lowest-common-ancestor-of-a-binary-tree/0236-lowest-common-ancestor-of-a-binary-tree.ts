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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    
	return searching(root, p, q);
};

function searching(node: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (!node) return null;
    
    if (node.val === p.val || node.val === q.val) {
        return node;
    }

    const left = searching(node.left, p, q);
    const right = searching(node.right, p, q);

    if (!!left && !!right) {
        return node;
    } else if (!left) {
        return right;
    } else if (!right) {
        return left;
    }

    return null;
}