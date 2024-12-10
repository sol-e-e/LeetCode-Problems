function rob(nums: number[]): number {
    if (nums.length <= 2) {
        return Math.max(...nums);
    }

    nums[2] += nums[0];
    for (let i = 3; i < nums.length; i++) {
        nums[i] += Math.max(nums[i-3], nums[i-2]);
    }

    return Math.max(...nums)
};