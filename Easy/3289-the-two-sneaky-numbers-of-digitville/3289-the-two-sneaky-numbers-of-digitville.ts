function getSneakyNumbers(nums: number[]): number[] {
    const result = [];
    const appeared = new Set<number>();

    for (const n of nums) {
        if (appeared.has(n)) {
            result.push(n);
        } else {
            appeared.add(n);
        }
    }

    return result;
};