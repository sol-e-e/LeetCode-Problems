function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    let answer = Array.from({ length: spells.length }, () => 0);
    potions.sort((a, b) => b - a);

    for (let i = 0; i < spells.length; i++) {
        const target = Math.ceil(success / spells[i]);
        let l = 0, r = potions.length - 1;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (potions[m] >= target) {
                answer[i] = m + 1;
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }

    return answer;
};