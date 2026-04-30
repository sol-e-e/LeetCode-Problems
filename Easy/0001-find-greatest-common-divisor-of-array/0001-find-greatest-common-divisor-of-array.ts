function findGCD(nums: number[]): number {
    const min = Math.min(...nums), max = Math.max(...nums);
    for (let i = min; i > 1; i--) {
        if (min % i === 0 && max % i === 0) return i;
    }
    return 1;
};