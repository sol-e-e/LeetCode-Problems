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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (!preorder.length || !inorder.length) return null;

    const current = preorder[0];
    const node = new TreeNode(current);
    const index = inorder.findIndex(i => i === current);

    node.left = buildTree(preorder.slice(1), inorder.slice(0, index));
    node.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));

    return node;
};