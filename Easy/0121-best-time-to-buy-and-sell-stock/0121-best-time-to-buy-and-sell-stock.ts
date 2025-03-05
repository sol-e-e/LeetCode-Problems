function maxProfit(prices: number[]): number {
    let profit = 0;
    let selling = prices[prices.length - 1];

    for (let i = prices.length - 2; i >= 0; i--) {
        if (prices[i] > selling) selling = prices[i];
        profit = Math.max(selling - prices[i], profit);
    }

    return profit;
};