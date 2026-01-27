function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    const parent = Array.from({length: n}, (_, i) => i);

    for (let [u, v] of edges) {
        union(u, v);
    }
    
    return find(source) === find(destination)

    function find(x: number) {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    function union(a: number, b: number) {
        const rootA = find(a);
        const rootB = find(b);
        if (rootA !== rootB) {
            parent[rootA] = rootB;
        }
    }
};