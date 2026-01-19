function getHappyString(n: number, k: number): string {
    const result: string[] = [];
    const current: string[] = [];

    function backtrack() {
        if (result.length >= k) return;
        if (current.length === n) {
            result.push(current.join(''));
            return;
        }

        for (let l of ['a', 'b', 'c']) {
            if (current[current.length - 1] !== l) {
                current.push(l);
                backtrack();
                current.pop()
            }
        }
    }

    backtrack();

    return result.length < k ? '' : result[k - 1];
};