function numJewelsInStones(jewels: string, stones: string): number {
    let answer = 0;
    const set: Set<string> = new Set(jewels.split(''));

    for (let i = 0; i < stones.length; i++) {
        if (set.has(stones[i])) {
            answer += 1;
        }
    }

    return answer;
};