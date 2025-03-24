function isValidSudoku(board: string[][]): boolean {
    const hash = new Map<string, Set<string>>();

    for (let i = 0; i < 9; i++) {
        const rowKey = `${i % 3}-row`;
        if (!hash.has(rowKey)) {
            hash.set(rowKey, new Set());
        }
     
        hash.get(rowKey).clear();

        for (let j = 0; j < 9; j++) {
            const cur = board[i][j];
            if (cur === '.') continue;
            if (hash.get(rowKey).has(cur)) return false;
            hash.get(rowKey).add(cur);
            const corKey = `${j}-col`;
            if (!hash.has(corKey)) {
                hash.set(corKey, new Set());
            }
            if (hash.get(corKey).has(cur)) return false;
            hash.get(corKey).add(cur);

            const boxKey = `${Math.floor(i / 3)}x${Math.floor(j / 3)}-box`;
            if (!hash.has(boxKey)) {
                hash.set(boxKey, new Set());
            }
            if (hash.get(boxKey).has(cur)) return false;
            hash.get(boxKey).add(cur);
        }
    }

    return true;
};