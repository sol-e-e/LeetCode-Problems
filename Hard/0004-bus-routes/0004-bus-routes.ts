function numBusesToDestination(routes: number[][], source: number, target: number): number {
    if (source === target) return 0;
    const stopToBuses = new Map<number, number[]>();
    const targetBuses = new Set<number>();
    let queue: number[] = [];
    
    for (let i = 0; i < routes.length; i++) {
        for (const stop of routes[i]) {
            if (!stopToBuses.has(stop)) stopToBuses.set(stop, []);
            stopToBuses.get(stop).push(i);
            if (stop === source) queue.push(i);
            if (stop === target) targetBuses.add(i);
        }
    }

    const visited = new Set(queue);
    let taken = 0;

    while (queue.length) {
        const next = [];
        taken += 1;
        for (const bus of queue) {
            if (targetBuses.has(bus)) return taken;
            for (const stop of routes[bus]) {
                for (const nextBus of (stopToBuses.get(stop) || [])) {
                    if (!visited.has(nextBus)) {
                        next.push(nextBus);
                        visited.add(nextBus);
                    }
                }
            }
        }
        queue = next;
    }
    
    return -1;  
};