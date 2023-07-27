/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function(root1, root2) {
    const leaves1 = getLeaves(root1);
    const leaves2 = getLeaves(root2);
    function getLeaves(node) {
        if (!node) return [];
        if (node.left === null && node.right === null) {
            return [node.val]
        }
        return [...getLeaves(node.left), ...getLeaves(node.right)];
    }
    function isEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }
    return isEqual(leaves1, leaves2);
};