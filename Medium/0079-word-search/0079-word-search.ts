function exist(board: string[][], word: string): boolean {
    const m = board.length, n = board[0].length, l = word.length;
    const directions = [[0, -1], [0, 1], [1, 0], [-1, 0]];
    const visited = new Set<string>(); // r:{}-c:{}
    let answer :boolean = false;

    function dfs(row: number, col: number, idx: number) {
        if (row >= m || col >= n || col < 0 || row < 0 || idx >= l) return;
        if (visited.has(`r:${row}-c:${col}`)) return;
        if (board[row][col] !== word[idx]) return;
        if (idx === l - 1) {
            answer = true;
            return;
        }

        visited.add(`r:${row}-c:${col}`);

        for (let [r, c] of directions) {
            dfs(row + r, col + c, idx + 1);
        }

        visited.delete(`r:${row}-c:${col}`);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                dfs(i, j, 0);
            }
        }
    }

    return answer;
};