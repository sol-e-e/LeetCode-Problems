/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = function (nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    for (const num of set1) {
        if (set2.has(num)) {
            set1.delete(num);
            set2.delete(num);
        }
    }
    return [[...set1], [...set2]];
};