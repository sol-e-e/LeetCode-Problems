function snakesAndLadders(board: number[][]): number {
    const n = board.length;
    if (n <= 2) return 1;

    const visited = new Map<number, number>();
    visited.set(1, 0);
    const queue = [[7, 1], [6, 1], [5, 1], [4, 1], [3, 1], [2, 1]];

    const skip = (num: number, count: number) => {
        return visited.has(num) && visited.get(num) <= count;
    }

    while (queue.length) {
        const [num, count] = queue.shift();
        if (skip(num, count)) continue;
        visited.set(num, Math.min(visited.get(num) ?? count, count));

        const [row, col] = getRowCol(num, n);
        if (board[row][col] !== -1) {
            if (!skip(board[row][col], count)) queue.push([board[row][col], count]);
        } else {
            for (let i = 1; i <= 6; i++) {
                if (num + i > n * n) break;
                if (!skip(num + i, count + 1)) queue.push([num + i, count + 1]);
            }
        }
    }

    return visited.get(n * n) ?? -1;
};

function getRowCol(num: number, len: number) {
    const row = len - Math.floor((num - 1) / len) - 1;
    const col = (num - 1) % len;

    return [row, len % 2 !== row % 2 ? col : len - col - 1];
}