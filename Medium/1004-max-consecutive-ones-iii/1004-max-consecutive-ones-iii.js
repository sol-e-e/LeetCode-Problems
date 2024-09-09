/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let max = 0;
    let count = 0;
    const flips = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
            continue;
        }
        
        flips.push(i);
        
        if (flips.length <= k) {
            count++;
        } else {
            max = count > max ? count : max;
            count = i - flips.shift();
        }
    }
    
    return count > max ? count : max;
};