function canVisitAllRooms(rooms: number[][]): boolean {
    const visited = new Array(rooms.length).fill(false);
    const stacks = [0];

    while(stacks.length) {
        const cur = stacks.pop();
        visited[cur] = true;

        for(const key of rooms[cur]) {
            if (visited[key]) continue;
            stacks.push(key);
        }
    }

    return visited.every(v => v);
};