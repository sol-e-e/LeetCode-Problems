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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];

    const result: number[][] = [];
    let queue: TreeNode[] = [root];
    let level = 0;

    while (queue.length) {
        const next = [];
        const temp =[];

        for (const node of queue) {
            temp.push(node.val);

            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
        }

        if (level % 2 === 1) {
            result.push(temp.reverse());
        } else {
            result.push(temp);
        }

        queue = next;
        level++;
    }

    
    return result;
};