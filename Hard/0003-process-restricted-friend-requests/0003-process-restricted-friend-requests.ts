function friendRequests(n: number, restrictions: number[][], requests: number[][]): boolean[] {
    const parent = Array(n).fill(0).map((_, i) => i);
    const result: boolean[] = [];

    for (let [u, v] of requests) {
        const rootU = find(u);
        const rootV = find(v);

        if (rootU === rootV) {
            result.push(true);
            continue;
        }

        let canUnion = true;

        for (let [x, y] of restrictions) {
            const rootX = find(x);
            const rootY = find(y);

            if ((rootX === rootU && rootY === rootV) ||
            (rootY === rootU && rootX === rootV)) {
                canUnion = false;
                break;
            }
        }

        if (canUnion) {
            union(u, v);
            result.push(true);
        } else {
            result.push(false);
        }
    }

    return result;

    function find(x: number) {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    function union(x: number, y: number): void {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) {
            parent[rootX] = rootY;
        }
    }
};