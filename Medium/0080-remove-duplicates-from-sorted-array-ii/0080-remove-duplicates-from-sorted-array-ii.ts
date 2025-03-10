function removeDuplicates(nums: number[]): number {
    let count = 0, current = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[current++] = nums[i];
            count = 0;
        } else {
            count++;
            if (count <= 1) nums[current++] = nums[i];
        }
    }
    return current;
};