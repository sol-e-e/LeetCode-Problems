/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let max = 0;
    let left = 0;
    let deleted = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) deleted++;
        
        if (deleted > 1) {
            if (nums[left] === 0) deleted--;
            left++;
        }
        
        max = Math.max(i - left + 1, max);
    }
    
    return max - 1;
};