function maximumDifference(nums: number[]): number {
    let answer = -1;
    let min = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > min) {
            answer = Math.max(answer, nums[i] - min);
        } else {
            min = nums[i];
        }
    }

    return answer;
};