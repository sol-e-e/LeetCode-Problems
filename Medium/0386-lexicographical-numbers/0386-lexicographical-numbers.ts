function lexicalOrder(n: number): number[] {
    const result: number[] = [];

    function dfs(cur: number) {
        if (cur > n) return;
        result.push(cur);

        for (let i = 0; i < 10; i++) {
            const next = cur * 10 + i;
            if (next > n) return;
            dfs(next);
        }
    }

    for (let i = 1; i < 10; i++) {
        dfs(i);
    }

    return result;
};