function longestConsecutive(nums: number[]): number {
    const increasing = new Set<number>();
    const decreasing = new Set<number>();

    for (const num of nums) {
        increasing.add(num + 1);
        decreasing.add(num - 1);
    }

    return [...increasing].filter(n => decreasing.has(n)).length + 2;
};