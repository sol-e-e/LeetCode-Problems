function minScore(n: number, roads: number[][]): number {
    let min = Infinity;
    const parent = Array.from({length: n + 1}, (_, i) => i);

    for (let [a, b, d] of roads) {
        union(a, b);
    }

    const target = find(1);

    for (let [a, b, d] of roads) {
        const [rootA, rootB] = [find(a), find(b)];

        if (target === rootA || target === rootB) {
            min = Math.min(d, min);
        }
    }

    return min;

    function find(x: number) {
        while (x !== parent[x]) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    function union(x: number, y: number) {
        const rootX = find(x);
        const rootY = find(y);

        if (rootX !== rootY) {
            parent[rootX] = rootY;
        }
    }
};