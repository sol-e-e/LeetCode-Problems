function findPeakElement(nums: number[]): number {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        const before = nums[m - 1] ?? -Infinity;
        const after = nums[m + 1] ?? -Infinity;

        if (before < nums[m] && after < nums[m]) {
            return m;
        } else if (before > after) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }

    return 0;
};
