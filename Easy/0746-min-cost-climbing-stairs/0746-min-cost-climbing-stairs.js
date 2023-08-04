/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function (cost) {
    const top = cost.length;
    for (let i = 2; i < top; i++) {
        cost[i] = Math.min(cost[i - 2], cost[i - 1]) + cost[i];
    }
    return Math.min(cost[top - 2], cost[top - 1]);
};