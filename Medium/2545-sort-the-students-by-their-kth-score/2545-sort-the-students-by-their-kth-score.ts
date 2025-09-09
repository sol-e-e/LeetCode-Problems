function sortTheStudents(score: number[][], k: number): number[][] {
    const m = score.length, n = score.length;
    for (let i = 0; i < m - 1; i++) {
        let h = i

        for (let j = i + 1; j < m; j++) {
            if (score[j][k] > score[h][k]) {
                h = j;
            }
        }

        [score[h], score[i]] = [score[i], score[h]];
    }

    return score;
};