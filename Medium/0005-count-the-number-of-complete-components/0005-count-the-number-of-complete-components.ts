function countCompleteComponents(n: number, edges: number[][]): number {
    const parent = Array.from({length: n}, (_, i) => i);

    for (const [x, y] of edges) {
        union(x, y);
    }

    const componentNodes = new Map<number, number>();
    const componentEdges = new Map<number, number>();

    for (let i = 0; i < n; i++) {
        const root = find(i);
        componentNodes.set(root, (componentNodes.get(root) || 0) + 1);
    }

    for (const [x, y] of edges) {
        const root = find(x);
        componentEdges.set(root, (componentEdges.get(root) || 0) + 1);
    }

    let count = 0;

    for (const [root, nodeCount] of componentNodes) {
        const edgeCount = componentEdges.get(root) || 0;
        const requiredEdges = nodeCount * (nodeCount - 1) / 2;

        if (edgeCount === requiredEdges) count += 1;
    }

    return count;

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

        if (rootX > rootY) {
            parent[rootX] = rootY;
        } else {
            parent[rootY] = rootX;
        }
    }
};