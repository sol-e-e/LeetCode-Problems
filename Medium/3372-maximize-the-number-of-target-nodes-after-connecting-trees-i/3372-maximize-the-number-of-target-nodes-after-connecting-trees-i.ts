function maxTargetNodes(edges1: number[][], edges2: number[][], k: number): number[] {
    const n = edges1.length + 1, m = edges2.length + 1;
    const adj1 = Array.from({ length: n }, () => []);
    const adj2 = Array.from({ length: m }, () => []);

    for (const [u, v] of edges1) {
        adj1[u].push(v);
        adj1[v].push(u);
    }

    for (const [u, v] of edges2) {
        adj2[u].push(v);
        adj2[v].push(u);
    }

    const path = Array(n).fill(0).map((_, i) => bfs(i, adj1, k));

    let max = 0;
    if (k > 0) {
        for (let i = 0; i < m; i++) {
            max = Math.max(max, bfs(i, adj2, k - 1));
        }
    }

    return path.map(p => p + max);
};

function bfs(start: number, adj: number[][], k: number) {
    if (k === 0) return 1;
    const visited = new Set();
    const queue = [start];
    visited.add(start);
    let h = k;
    let nodes = 1;

    while (queue.length && h > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            for (const neighbor of adj[node]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                    nodes += 1;
                }
            } 
        }
        h -= 1;
    }

    return nodes;
}
