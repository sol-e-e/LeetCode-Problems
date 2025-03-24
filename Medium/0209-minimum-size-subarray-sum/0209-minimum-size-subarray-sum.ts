function minSubArrayLen(target: number, nums: number[]): number {
    let len = Infinity;
    let start = 0, end = 0;
    let sum = 0;

    while (end < nums.length) {
        sum += nums[end];

        while (sum >= target) {
            len = Math.min(len, end - start + 1);
            sum -= nums[start];
            start += 1;
        }

        end += 1;
    }


    return len === Infinity ? 0 : len;
};