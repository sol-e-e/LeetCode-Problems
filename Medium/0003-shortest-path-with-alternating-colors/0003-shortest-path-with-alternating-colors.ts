function shortestAlternatingPaths(n: number, redEdges: number[][], blueEdges: number[][]): number[] {
    const graph = Array.from({length: n}, () => []);

    for (const [a, b] of redEdges) {
        graph[a].push([b, 'r']);
    }
    for (const [u, v] of blueEdges) {
        graph[u].push([v, 'b']);
    }

    const result = Array(n).fill(-1);
    result[0] = 0;
    let queue: [number, string][] = [[0, 'r'], [0, 'b']];
    let path = 0;
    const visited = new Set<string>();

    while (queue.length) {
        const next: [number, string][] = [];
        path += 1;
        
        for (const [node, color] of queue) {
            for (const [nextNode, nextColor] of graph[node]) {
                if (color !== nextColor) {
                    const key = `${nextNode}-${nextColor}`;
                    if (!visited.has(key)) {
                        visited.add(key);
                        if (result[nextNode] === -1) {
                            result[nextNode] = path;
                        }
                        next.push([nextNode, nextColor])
                    }
                }
            }
        }

  
        queue = next;
    }

    return result;
};