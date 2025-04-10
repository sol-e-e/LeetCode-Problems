function climbStairs(n: number): number {
    if (n <= 2) {
        return n;
    }

    return n <= 3 ? n : 2 * climbStairs(n - 2) + climbStairs(n - 3);
};