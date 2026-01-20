function largestComponentSize(nums: number[]): number {
    const MAX_VAL = 100000;
    const parent = Array(MAX_VAL + 1).fill(0).map((_, i) => i);

    for (let num of nums) {
        if (num === 1) continue;
        const primes = getPrimeFactors(num);

        for (let prime of primes) {
            parent[find(prime)] = find(num);
        }
    }

    const componentSizes = new Map<number, number>();

    for (let num of nums) {
        const parent = find(num);
        componentSizes.set(parent, (componentSizes.get(parent) || 0) + 1);
    }

    return Math.max(...componentSizes.values());

    function find(x: number): number {
        if (parent[x] === undefined) parent[x] = x;
    
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]]; 
            x = parent[x];
        }
        return x;
    }
};

function getPrimeFactors(n: number): number[] {
    const primes: number[] = [];
    let temp = n;
    
    if (temp % 2 === 0) {
        primes.push(2);
        while (temp % 2 === 0) {
            temp /= 2;
        }
    }
    
    for (let i = 3; i * i <= temp; i += 2) {
        if (temp % i === 0) {
            primes.push(i);
            while (temp % i === 0) {
                temp /= i;
            }
        }
    }
    
    if (temp > 1) {
        primes.push(temp);
    }
    
    return primes;
}
