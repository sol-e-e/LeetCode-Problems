function exist(board: string[][], word: string): boolean {
    const m = board.length, n = board[0].length;
    const visited = new Set<string>();

    function canSearch(row: number, col: number, idx: number) {
        if (row < 0 || col < 0 || row >= m || col >= n || idx >= word.length) return false;
        if (visited.has(`${row}-${col}`) || word[idx] !== board[row][col]) return false;
        if (idx === word.length - 1 && word[idx] === board[row][col]) return true;
        visited.add(`${row}-${col}`);

        return canSearch(row + 1, col, idx + 1) || canSearch(row - 1, col, idx + 1) || canSearch(row, col + 1, idx + 1) || canSearch(row, col - 1, idx + 1)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] !== word[0]) continue;
            if (canSearch(i, j, 0)) {
                return true;
            } else {
                visited.clear();
            }
        }
    }

    return false;
};