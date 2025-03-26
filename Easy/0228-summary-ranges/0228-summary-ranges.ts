function summaryRanges(nums: number[]): string[] {
    let result: string[] = [];
    let start = 0;

    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] - nums[i - 1] === 1) continue;

        result.push(start === i - 1 ? `${nums[start]}` : `${nums[start]}->${nums[i - 1]}`);
        start = i;
    }

    return result;
};