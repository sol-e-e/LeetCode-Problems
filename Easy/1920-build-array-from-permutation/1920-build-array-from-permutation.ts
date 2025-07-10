function buildArray(nums: number[]): number[] {
    return nums.map((val, _, arr) => arr[val]);
};