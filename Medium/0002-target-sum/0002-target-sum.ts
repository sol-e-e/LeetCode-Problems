function findTargetSumWays(nums: number[], target: number): number {
    let counter = new Map<number, number>();
    counter.set(0, 1);

    for (const n of nums) {
        const next = new Map<number, number>();

        for (const [sum, count] of counter) {
            next.set(sum + n, (next.get(sum + n) || 0) + count);
            next.set(sum - n, (next.get(sum - n) || 0) + count);
        }
        counter = next;
    }

    return counter.get(target) || 0;
};