function combine(n: number, k: number): number[][] {
    const result: number[][] = [];
    const temp: number[] = [];

    function backtrack(cur: number) {
        if (temp.length === k) {
            result.push([...temp]);
            return;
        }  

        if (cur > n) return;

        for (let i = cur; i <= n; i++) {
            temp.push(i);
            backtrack(i + 1);
            temp.pop();
        }
    }

    backtrack(1);

    return result;
};