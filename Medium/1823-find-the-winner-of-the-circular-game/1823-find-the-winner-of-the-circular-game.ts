function findTheWinner(n: number, k: number): number {
    let winner = 0;
    for (let i = 1; i <= n; i++) {
        winner = (winner + k) % i;
    }

    return winner + 1;
};