function subsets(nums: number[]): number[][] {
    const result: number[][] = [];

    function backtrack(cur: number[], idx: number) {
        result.push(cur);

        if (idx === nums.length) return;

        for (let i = idx; i < nums.length; i++) {
            const next = [...cur].concat(nums[i]);
            backtrack(next, i + 1);
        }
    }

    backtrack([], 0);

    return result;
};