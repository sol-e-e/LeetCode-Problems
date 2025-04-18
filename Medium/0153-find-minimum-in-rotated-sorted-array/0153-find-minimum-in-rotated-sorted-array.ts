function findMin(nums: number[]): number {
    let left = 0, right = nums.length - 1, min = nums.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        
        if (nums[mid] <= nums[nums.length - 1]) {
            min = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return nums[min];
};