function numRabbits(answers: number[]): number {
    let count = 0;
    let map = new Map<number, number>();

    for (const ans of answers) {
        map.set(ans, (map.get(ans) || 0) + 1);
    }

    map.forEach((v, k) => {
        const size = k + 1;
        const groups = Math.ceil(v / size);
        count += groups * size;
    })

    return count;
};