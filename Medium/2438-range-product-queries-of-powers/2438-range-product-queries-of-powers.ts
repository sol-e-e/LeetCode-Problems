function productQueries(n: number, queries: number[][]): number[] {
    const result: number[] = [];
    const powers: number[] = [];
    let digit = 0;

    while (n > 0) {
        if (n & 1) powers.push(2 ** digit);
        n >>= 1;
        digit += 1;
    }

    for (let [a, b] of queries) {
        let sum = 1;
        for (let i = a; i <= b; i++) {
            sum *= powers[i];
        }
        result.push(sum % (10**9 + 7));
    }

    return result;
};