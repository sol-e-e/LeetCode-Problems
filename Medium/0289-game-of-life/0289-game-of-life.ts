/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
    const m = board.length, n = board[0].length;

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            let count = 0;
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    const row = r + i, col = c + j;
                    if (row < 0 || row >= m || col < 0 || col >= n) continue;
                    if (board[row][col] > 0) count += 1;
                }
            }
            board[r][c] = count * (board[r][c] > 0 ? 1 : -1);
        }
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            let cur = board[r][c];
            let next = 0;

            // live cell
            if (cur > 0) {
                cur -= 1;
                // rule 1
                if (cur < 2) {
                    next = 0;
                }
                // rule 2
                if (cur === 2 || cur === 3) {
                    next = 1;
                }
                // rule 3 
                if (cur > 3) {
                    next = 0;
                }
            } else { // dead cell
                if (cur === -3) {
                    next = 1;
                }
            }

            board[r][c] = next;
        }
    }

};