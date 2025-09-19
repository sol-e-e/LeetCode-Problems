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

function tree2str(root: TreeNode | null): string {
    let answer = '';

    function traversal(node: TreeNode | null) {
        if (!node) return;
        answer += String(node.val);

        if (!node.left && !node.right) return;

        answer += '(';
        traversal(node.left);
        answer += ')';

        if (node.right) {
            answer += '(';
            traversal(node.right);
            answer += ')';
        }
    }

    traversal(root);

    return answer;
};