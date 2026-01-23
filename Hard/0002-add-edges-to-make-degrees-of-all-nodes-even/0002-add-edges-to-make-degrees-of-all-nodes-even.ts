function isPossible(n: number, edges: number[][]): boolean {
    let graph = new Map<number, Set<number>>();

    for (let i = 1; i <= n; i++) {
        graph.set(i, new Set());
    }
    
    for (let [a, b] of edges) {
        graph.get(a).add(b);
        graph.get(b).add(a);
    }

    const oddNodes = [];
    for (let i = 1; i <= n; i++) {
        if (graph.get(i)!.size % 2 === 1) oddNodes.push(i);
    }

    const oddCount = oddNodes.length;

    if (oddCount === 0) return true;
    if (oddCount === 2) {
        const [a, b] = oddNodes;
        if (!graph.get(a).has(b)) return true;

        for (let i = 1; i <= n; i++) {
            if (i !== a && i !== b && !graph.get(a).has(i) && !graph.get(b).has(i)) return true;
        }

        return false;
    }

    if (oddCount === 4) {
        const [a, b, c, d] = oddNodes;
        return (!graph.get(a).has(b) && !graph.get(c).has(d)) ||
            (!graph.get(a).has(c) && !graph.get(b).has(d)) ||
            (!graph.get(a).has(d) && !graph.get(b).has(c));
    }

    return false;
};