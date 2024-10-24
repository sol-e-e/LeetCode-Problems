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

function goodNodes(root: TreeNode | null): number {
    let answer = 0;
    let max = root.val;

    DFS(root, max);
    function DFS(root: TreeNode | null, max: number) {
        if (!root) return;
        if (root.val >= max) {
            answer++;
            max = Math.max(root.val, max);
        }
        DFS(root!.left, max);
        DFS(root!.right, max);
    }

    return answer;
};

