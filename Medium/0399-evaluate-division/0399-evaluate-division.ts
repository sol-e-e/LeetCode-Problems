function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const answer = Array.from( { length: queries.length }, () => -1);
    const graph: Record<string, [string, number][]> = {};

    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        (graph[a] ??= []).push([b, values[i]]);
        (graph[b] ??= []).push([a, 1 / values[i]]);
    }

    console.log(graph)

    for (let i = 0; i < queries.length; i++) {
        const [c, d] = queries[i];
        const visited = new Set<string>();
        const queue: [string, number][] = [[c, 1]];

        if (!graph[c] || !graph[d]) continue;
        if (c === d) answer[i] = 1;

        for (const [current, value] of queue) {
            if (visited.has(current)) continue;
            visited.add(current);

            for (const [stopover, multiplier] of graph[current]) {
                if (visited.has(stopover)) continue;

                if (stopover === d) {
                    answer[i] = value * multiplier;
                    break;
                }

                queue.push([stopover, value * multiplier]);
            }

            if (answer[i] !== -1) break;
        }
    }

    return answer;
};