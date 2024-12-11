function numTilings(n: number): number {
    // [1, 2, 5, 11, 24, 53, 117, 258]
    //    0. 1, 1,  2,   5, 11,  24

    let dp: number[] = Array.from({ length: n + 2 });
    dp[0] = 1;
    dp[1] = 2;
    dp[2] = 5;

    for (let i = 3; i < n; i++) {
        dp[i] = (dp[i - 1] * 2 + dp[i - 3]) % ((10**9) + 7);
    }    
    return dp[n - 1];
};