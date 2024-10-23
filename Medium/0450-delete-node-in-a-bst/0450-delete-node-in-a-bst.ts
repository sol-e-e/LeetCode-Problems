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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return null;

    if (root.val < key) {
        root.right = deleteNode(root.right, key);
    } else if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else {
        if (!root.right && !root.left) {
            return null;
        } else if (!root.left) {
            return root.right;
        } else if (!root.right) {
            return root.left;
        } else {
            let changed = root.left;
            while (changed.right) changed = changed.right;
            [changed.val, root.val] = [root.val, changed.val];
            root.left = deleteNode(root.left, changed.val)
        }
    }

    return root;
};
