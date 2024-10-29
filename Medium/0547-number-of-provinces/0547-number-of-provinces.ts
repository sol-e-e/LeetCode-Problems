function findCircleNum(isConnected: number[][]): number {
    let provinces = 0;
    const visited = new Set();

    for (let i = 0; i < isConnected.length; i++) {
        if (visited.has(i)) continue;
        const cities = [i];
        while(cities.length) {
            const city = cities.pop();
            const connected = isConnected[city];
            visited.add(city)
            for (let j = 0; j < connected.length; j++) {
                if (connected[j] && !visited.has(j)) {
                    cities.push(j);
                }
            }
        }
        provinces++;
    }
    return provinces;
};