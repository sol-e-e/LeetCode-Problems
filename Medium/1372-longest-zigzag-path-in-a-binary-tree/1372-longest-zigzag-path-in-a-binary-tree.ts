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

function longestZigZag(root: TreeNode | null): number {
    if (!root) return 0;
    return maxZigZag(root, 0, null);
};

function maxZigZag(node: TreeNode | null, visited: number, direction: 'left' | 'right' | null): number {
    if (!node) return visited;

    visited++;

    if (!direction) {
        return Math.max(maxZigZag(node.left, 0, 'left'), maxZigZag(node.right, 0, 'right'));
    } else if (direction === 'left') {
        if (!node.right) {
            visited = Math.max(visited, maxZigZag(node.left, 0, 'left'));
        } else {
            visited = Math.max(maxZigZag(node.right, visited, 'right'), maxZigZag(node.left, 0, 'left'))
        }
    } else {
        if (!node.left) {
            visited = Math.max(visited, maxZigZag(node.right, 0, 'right'));
        } else {
            visited = Math.max(maxZigZag(node.left, visited, 'left'), maxZigZag(node.right, 0, 'right'));
        }
    }

    return visited;
}