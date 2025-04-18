function maxSubarraySumCircular(nums: number[]): number {
    let maxSum = nums[0], max = 0;
    let minSum = nums[0], min = 0;
    let total = 0;

    for (let num of nums) {
        max = Math.max(num, max + num);
        maxSum = Math.max(maxSum, max);

        min = Math.min(num, min + num);
        minSum = Math.min(minSum, min);

        total += num;
    }

    if (maxSum < 0) return maxSum;

    return Math.max(maxSum, total - minSum);
};