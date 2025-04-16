function permute(nums: number[]): number[][] {
    const result: number[][] = [];
    const current = [];
    let used = Array(nums.length).fill(false);

    function backtrack() {
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (!used[i]) {
                current.push(nums[i]);
                used[i] = true;
                backtrack();
                used[i] = false;
                current.pop();
            }
        }

    }

    backtrack();

    return result;
};