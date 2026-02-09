function watchedVideosByFriends(watchedVideos: string[][], friends: number[][], id: number, level: number): string[] {
    const visited = Array(watchedVideos.length).fill(false);
    visited[id] = true;
    let queue = [id]; 

    for (let currentLevel = 0; currentLevel < level; currentLevel++) {
        const next = [];

        for (const person of queue) {
            for (const friend of friends[person]) {
                if (!visited[friend]) {
                    visited[friend] = true;
                    next.push(friend);
                }
            }
        }
        
        queue = next;
    }

    const videoCount: Record<string, number> = {};
    for (const friend of queue) {
        for (const video of watchedVideos[friend]) {
            videoCount[video] = (videoCount[video] || 0) + 1;
        }
    }

    return Object.entries(videoCount).sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0])).map(([v]) => v);
};