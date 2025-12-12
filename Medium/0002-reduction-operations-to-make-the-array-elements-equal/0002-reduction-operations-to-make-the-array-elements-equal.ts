function reductionOperations(nums: number[]): number {
    nums.sort((a, b) => b - a);
    let answer = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] !== 0) {
            answer += i;
        }
    }
    return answer;
};