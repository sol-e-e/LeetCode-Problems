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

function rightSideView(root: TreeNode | null): number[] {
    if (!root) return [];
    const answer = [];
    const queue = [];

    queue.push(root);

    while(queue.length) {
        let size = queue.length;

        while(size) {
            let cur = queue.shift();
            if (size === 1) {
                answer.push(cur.val);
            }

            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);

            size--;
        }
    }

    return answer;
};

