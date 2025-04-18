function maxSubArray(nums: number[]): number {
    let sums = Array(nums.length).fill(0);
    sums[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        sums[i] = Math.max(nums[i], sums[i - 1] + nums[i]);
    }

    return Math.max(...sums);
};