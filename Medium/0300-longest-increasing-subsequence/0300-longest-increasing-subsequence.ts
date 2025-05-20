function lengthOfLIS(nums: number[]): number {
    let answer = 0;
    let dp = Array.from(nums).fill(1);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        answer = Math.max(answer, dp[i]);
    }

    return answer;
};