function removeDuplicates(nums: number[]): number {
    let k = 1;
    let el = nums[0];

    for (const n of nums) {
        if (el === n) continue;
        nums[k++] = n;
        el = n;
    }

    return k;
};