function maxProfit(prices: number[]): number {
    let holding = -prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        const maxHolding = Math.max(holding, profit - prices[i]);
        const maxProfit = Math.max(holding + prices[i], profit);

        holding = maxHolding;
        profit = maxProfit;
    }

    return profit;
};