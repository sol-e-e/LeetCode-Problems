function magicalString(n: number): number {
    if (n <= 3) return 1;

    const s = [1, 2, 2];
    let i = 2;
    let count = 1;
    let next = 1;
    while (s.length < n) {
        const groupSize = s[i];

        for (let j = 0; j < groupSize && s.length < n; j++) {
            s.push(next);
            if (next === 1) count++;
        }
        i++;
        next = next === 1 ? 2 : 1;
    }

    return count;
};