function maximumUniqueSubarray(nums: number[]): number {
    let [s, e] = [0, 0];
    let score = 0;
    let sum = 0;
    const unique = new Set<number>();

    while (s <= e) {
        while (!unique.has(nums[e]) && e < nums.length) {
            unique.add(nums[e]);
            sum += nums[e];
            e++;
        }

        if (sum > score) {
            score = sum;
        }

        unique.delete(nums[s]);
        sum -= nums[s];
        s++;
    }

    return score;
};