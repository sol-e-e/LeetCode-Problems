function minimumCost(source: string, target: string, original: string[], changed: string[], cost: number[]): number {
    const CHAR_COUNT = 26;
    const INF = Number.MAX_SAFE_INTEGER;
    const A_CODE = 97;
    const graph = Array(CHAR_COUNT).fill(0).map(() => Array(CHAR_COUNT).fill(INF));

    for (let i = 0; i < CHAR_COUNT; i++) {
        graph[i][i] = 0;
    }

    for (let i = 0; i < original.length; i++) {
        const from = original[i].charCodeAt(0) - A_CODE;
        const to = changed[i].charCodeAt(0) - A_CODE;
        graph[from][to] = Math.min(graph[from][to], cost[i]);
    }
    
    for (let k = 0; k < CHAR_COUNT; k++) {
        for (let i = 0; i < CHAR_COUNT; i++) {
            for (let j = 0; j < CHAR_COUNT; j++) {        
                graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);        
            }
        }
    }

    let answer = 0;
    for (let i = 0; i < source.length; i++) {
        answer += graph[source.charCodeAt(i) - A_CODE][target.charCodeAt(i) - A_CODE];
        if (answer >= INF) {
            return -1;
        }
    }

    return answer;
};