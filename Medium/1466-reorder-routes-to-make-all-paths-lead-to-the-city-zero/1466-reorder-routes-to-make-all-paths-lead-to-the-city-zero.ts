function minReorder(n: number, connections: number[][]): number {
    let reorder = 0;
    const map = new Map<number, number[]>();
    const visited = new Set<number>();
    const roads = new Set<string>();

    connections.forEach(connection => {
        const [start, end] = connection;
        const [sl, el] = [(map.get(start) || []), (map.get(end) || [])];
        sl.push(end);
        el.push(start);
        map.set(start, sl);
        map.set(end, el);
        roads.add(connection.join('-'))
    });

    function dfs(city: number) {
        visited.add(city);
        const connects = map.get(city) || [];
        for (const c of connects) {
            if (!visited.has(c)) {
                if (roads.has([city, c].join('-'))) reorder++; 
                dfs(c)
            }
        }
    }

    dfs(0)

    return reorder;
};