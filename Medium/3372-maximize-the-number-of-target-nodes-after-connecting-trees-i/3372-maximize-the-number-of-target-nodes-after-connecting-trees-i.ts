function maxTargetNodes(edges1: number[][], edges2: number[][], k: number): number[] {
    const max = Math.max(...countNodes(makeTree(edges2), k - 1));

    return countNodes(makeTree(edges1), k).map((v) => v + max);
};

function makeTree(edges: number[][]): Record<string, number[]> {
    let tree: Record<string, number[]> = {}; 
    for (const [u, v] of edges) {
        if (!tree[u]) tree[u] = [];
        if (!tree[v]) tree[v] = [];
        tree[u].push(v);
        tree[v].push(u);
    }
    return tree;
}

function countNodes(tree: Record<string, number[]>, height: number): number[] {
    let result: number[] = [];

    for (const [key, value] of Object.entries(tree)) {
        let queue = [];
        let visited = new Set<number>();
        let count = 0, h = height;
        queue.push(Number(key));
        while (queue.length && h >= 0) {
            const next = [];
        
            for (const node of queue) {
                visited.add(node);
                count += 1;
                for (const nextNode of tree[node]) {
                    if (!visited.has(nextNode)) {
                        next.push(nextNode);
                    }
                }
            }

            queue = [...next];
            h--;
        }

        result.push(count);
    }

    return result;
}