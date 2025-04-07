/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    const m = board.length, n = board[0].length;
    function capture(row: number, col: number) {
        if (row < 0 || col < 0 || row >= m || col >= n) return;
        if (board[row][col] !== 'O') return;

        board[row][col] = 'W';
        capture(row + 1, col);
        capture(row - 1, col);
        capture(row, col + 1);
        capture(row, col - 1);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0 || i === m - 1 || j === n - 1) {
                capture(i, j);
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') board[i][j] = 'X';
            else if (board[i][j] === 'W') board[i][j] = 'O'
        }
    }
};