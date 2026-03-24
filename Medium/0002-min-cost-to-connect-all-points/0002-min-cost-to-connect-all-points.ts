function minCostConnectPoints(points: number[][]): number {
    const n = points.length;
    const visited = Array(n).fill(false);
    const minCost = Array(n).fill(Infinity);

    minCost[0] = 0;
    let totalCost = 0;

    for (let i = 0; i < n; i++) {
        let u = -1;
        for (let v = 0; v < n; v++) {
            if (!visited[v] && (u === -1 || minCost[v] < minCost[u])) {
                u = v;
            }
        }

        visited[u] = true;
        totalCost += minCost[u];

        for (let v = 0; v < n; v++) {
            if (!visited[v]) {
                const [xu, yu] = points[u];
                const [xv, yv] = points[v];
                const cost = Math.abs(xu - xv) + Math.abs(yu - yv);
                minCost[v] = Math.min(minCost[v], cost);
            }
        }
    }

    return totalCost;
};