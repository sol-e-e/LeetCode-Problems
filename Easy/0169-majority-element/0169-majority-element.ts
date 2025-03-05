function majorityElement(nums: number[]): number {
    let candidate: number;
    let count = 0;

    for (const n of nums) {
        if (count === 0) {
            candidate = n;
        }
        count += (candidate === n) ? 1 : -1;
        if (count > nums.length / 2) return candidate;
    }

    return candidate;
};