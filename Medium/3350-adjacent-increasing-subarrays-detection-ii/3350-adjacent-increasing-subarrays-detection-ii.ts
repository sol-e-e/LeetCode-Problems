function maxIncreasingSubarrays(nums: number[]): number {
    let answer = 0;
    let prev = 0;
    let cur = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            cur += 1;
        } else {
            prev = cur;
            cur = 1;
        }
        answer = Math.max(answer, Math.max(Math.floor(cur / 2), Math.min(prev, cur)));
    }
    return answer;
};