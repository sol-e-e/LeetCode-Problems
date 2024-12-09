function minEatingSpeed(piles: number[], h: number): number {
    let low = 1, high = Math.max(...piles);

    while (low <= high) {
        const m = Math.floor((low + high) / 2);
        const sum = piles.reduce((acc, cur) => {
            acc += cur <= m ? 1 : Math.ceil(cur / m);
            return acc;
        }, 0);

        if (sum > h) {
            low = m + 1;
        } else {
            high = m - 1;
        }
    }

    return low;
};