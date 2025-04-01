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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (!inorder.length) return null;

    const val = postorder.pop();
    const node = new TreeNode(val);
    const index = inorder.findIndex(i => i === val);

    node.right = buildTree(inorder.slice(index + 1), postorder);
    node.left = buildTree(inorder.slice(0, index), postorder);

    return node;
};