/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let count = 0;
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const diff = k - nums[i]
        if (map.has(diff)) {
            count++;
            map.set(diff, map.get(diff) - 1);
            if (map.get(diff) === 0) {
                map.delete(diff);
            }
            continue;
        }
        
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
            continue;
        }
        
        map.set(nums[i], 1);
    }
    
    return count;
}