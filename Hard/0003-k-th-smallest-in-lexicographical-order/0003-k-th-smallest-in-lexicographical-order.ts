function findKthNumber(n: number, k: number): number {
    let current = 1;
    k--;

    while (k > 0) {
        const count = countingWithPrefix(current, n);

        if (k >= count) {
            k -= count;
            current++;
        } else {
            k--;
            current *= 10;
        }
    }
  
    return current;
};

function countingWithPrefix(prefix: number, n: number): number {
    let count = 0;
    let current = prefix;
    let next = prefix + 1;

    while (current <= n) {
        if (n < 100) console.log(count, current, next)
        count += Math.min(n + 1, next) - current;
        current *= 10;
        next *= 10;
    }

    return count;
}
