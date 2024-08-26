/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length -1;
    let area = 0;
    let maxArea = 0;
    
    while (left < right) {
        let l = right - left;
       if (height[left] < height[right]) {
           area = height[left] * l;
           left++;
       } else {
           area = height[right] * l;
           right--;
       }
        
        if (area > maxArea) {
            maxArea = area;
        }
    }
    
    return maxArea;
};