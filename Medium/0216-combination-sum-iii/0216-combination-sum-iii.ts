function combinationSum3(k: number, n: number): number[][] {
    const result = [];
    const temp = [];

    function backtrack(sum: number, cur: number) {
        if (sum === 0) {
            if (temp.length === k) {
                result.push([...temp]);
            } 
            return;
        }
        if (cur > 9 || cur > sum || temp.length >= k) {
            return;
        }

        for (let i = cur; i <= 9; i++) {
            temp.push(i);
            backtrack(sum - i, i + 1);
            temp.pop();
        }
    }

    backtrack(n, 1);

    return result;
};