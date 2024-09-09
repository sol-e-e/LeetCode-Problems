/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let flipped = 0;
    let start = 0;
    let max = 0;
  
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) flipped++;
        
        if (flipped > k) {
            if (nums[start] === 0) flipped--;
            start++;
        }
        
        max = Math.max(max, i - start + 1);
    }
    
    return max;
};