function subsets(nums: number[]): number[][] {
    const result: number[][] = [];
    const path: number[] = [];

    function backtrack(start: number) {
        result.push([...path]);

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1);
            path.pop();
        }
    }

    backtrack(0);

    return result;
};