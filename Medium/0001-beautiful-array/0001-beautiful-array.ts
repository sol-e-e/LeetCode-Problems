function beautifulArray(n: number): number[] {
    if (n === 1) return [1];

    const oddCount = Math.ceil(n/2);
    const evenCount = Math.floor(n/2);

    const odds = beautifulArray(oddCount);
    const evens = beautifulArray(evenCount);

    return [
        ...odds.map(x => x * 2 - 1),
        ...evens.map(x => x * 2)
    ]
};