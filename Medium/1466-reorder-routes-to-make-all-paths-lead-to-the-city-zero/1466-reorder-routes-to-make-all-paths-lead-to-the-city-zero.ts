function minReorder(n: number, connections: number[][]): number {
    let reorder = 0;
    const origins = new Map<number, Set<number>>();
    const reversed = new Map<number, Set<number>>();
    const visited = new Set<number>();

    for (const [from, to] of connections) {
        origins.set(from, (origins.get(from) || new Set()).add(to));
        reversed.set(to, (reversed.get(to) || new Set()).add(from));
    }

    function dfs(city: number) {
        visited.add(city);
        for (const origin of (origins.get(city) || [])) {
            if (!visited.has(origin)) {
                reorder++;
                dfs(origin)
            }
        }

        for (const reverse of (reversed.get(city) || [])) {
            if (!visited.has(reverse)) {
                dfs(reverse);
            }
        }
    }

    dfs(0)

    return reorder;
};