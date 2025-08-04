function totalFruit(fruits: number[]): number {
    let picked = new Map<number, number>();
    let start = 0, max = 0;

    for (let end = 0; end < fruits.length; end++) {
        picked.set(fruits[end], (picked.get(fruits[end]) ?? 0) + 1);

        while (picked.size > 2) {
            const startFruit: number = fruits[start];

            picked.set(startFruit, picked.get(startFruit) - 1);

            if (picked.get(startFruit) === 0) {
                picked.delete(startFruit);
            }
            start += 1;
        }

        max = Math.max(max, end - start + 1);
    }

    return max;
};