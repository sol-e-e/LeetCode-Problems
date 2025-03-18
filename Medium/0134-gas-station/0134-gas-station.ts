function canCompleteCircuit(gas: number[], cost: number[]): number {
    if (gas.reduce((a, c, i) => a + c - cost[i], 0) < 0) return -1;
    
    let start = 0;
    const len = gas.length;
    gas = gas.map((g, i) => g - cost[i]);
    let tank = gas[0];

    for (let i = 0; i < len * 2; i++) {
        const cur = i % len;
        if (gas[cur] >= gas[cur] + tank) {
            tank = gas[cur];
            start = cur;
        } else {
            tank += gas[cur];
        }
    }

    return start;
};