function waysToMakeFair(nums: number[]): number {
    const n = nums.length;
    let sufEven = 0, sufOdd = 0;
    let even = 0, odd = 0, answer = 0;

    for (let i = 0; i < n; i += 2) sufEven += nums[i];
    for (let i = 1; i < n; i += 2) sufOdd += nums[i];

    for (let i = 0; i < n; i++) {
        const num = nums[i];
        if (i % 2 === 0) {
            sufEven -= num;
            if (odd + sufEven === even + sufOdd) answer += 1;
            even += num;
        } else {
            sufOdd -= num;
            if (odd + sufEven === even + sufOdd) answer += 1;
            odd += num;
        }
    }

    return answer;
};