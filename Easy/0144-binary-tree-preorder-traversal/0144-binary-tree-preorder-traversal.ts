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

function preorderTraversal(root: TreeNode | null): number[] {
    const answer: number[] = [];
    const stack: TreeNode[] = [];
    let current = root;

    while (current || stack.length) {
        while (current) {
            answer.push(current.val);
            stack.push(current.right);
            current = current.left;
        }
        current = stack.pop();
    }

    return answer;
};