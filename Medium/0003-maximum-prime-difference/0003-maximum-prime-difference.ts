function maximumPrimeDifference(nums: number[]): number {
    let li = 0, ri = nums.length - 1;

    while (li < ri) {
        if (isPrime(nums[li])) {
            break;
        } else {
            li++;
        }
    }

    while (li < ri) {
        if (isPrime(nums[ri])) {
            break;
        } else {
            ri--;
        }
    }

    return ri - li;
};

function isPrime(n: number): boolean {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
}