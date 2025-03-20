function threeSum(nums: number[]): number[][] {
    const result :number[][] = [];
    const set: Set<number> = new Set(nums);
    nums.sort((a, b) => a - b);
    console.log(nums);

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            let j = i + 1, k = nums.length - 1;
            const subset: Set<number> = new Set();
            while (j < k) {
                if (subset.has(nums[j])) {
                    j++;
                    continue;
                }
                const sum = nums[i] + nums[j] + nums[k];
                if (sum < 0) {
                    j++;
                } else if (sum > 0) {
                    k--;
                } else {
                    result.push([nums[i], nums[j], nums[k]]);
                    subset.add(nums[j]);
                    j++;
                }
            }
            set.delete(nums[i]);
        }
    }

    return result;
};