function numberOfBeams(bank: string[]): number {
    const m = bank.length, n = bank[0].length;
    let answer = 0;
    let prev = 0;

    for (let i = 0; i < m; i++) {
        let cur = 0;
        for (let j = 0; j < n; j++) {
            if (bank[i][j] === '1') {
                cur += 1;
            }
        }
        
        answer += prev * cur;
        if (cur !== 0) {
            prev = cur;
        }
    }

    return answer;
};