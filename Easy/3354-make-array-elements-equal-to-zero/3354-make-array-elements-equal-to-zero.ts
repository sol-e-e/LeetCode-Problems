function countValidSelections(nums: number[]): number {
    let answer = 0;
    let left = 0, right = nums.reduce((a, c) => a + c, 0);

    for (let i = 0; i < nums.length; i++) {
        left += nums[i];
        right -= nums[i];
        if (nums[i] !== 0) continue;
        if (left === right) answer += 2;
        if (Math.abs(left - right) === 1) answer += 1;
    }

    return answer;
};