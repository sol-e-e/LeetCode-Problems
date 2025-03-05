function twoSum(nums: number[], target: number): number[] {
    const hash: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i])) return [hash.get(nums[i]), i];
        hash.set(target - nums[i], i);
    }
};