function maxProfit(prices: number[], fee: number): number {
   let dp = Array.from({ length: prices.length + 1 }, () => new Array(2).fill(0));

   for (let i = prices.length - 1; i >= 0; i--) {
    for (let canBuy = 1; canBuy >= 0; canBuy--) {
        let buy = -Infinity, sell = -Infinity;
        if (canBuy) {
            buy = -prices[i] + dp[i + 1][0];
        } else {
            sell = prices[i] - fee + dp[i + 1][1];
        }
        const next = dp[i + 1][canBuy];
        dp[i][canBuy] = Math.max(buy, sell, next);
    }
   }

   return dp[0][1];
};