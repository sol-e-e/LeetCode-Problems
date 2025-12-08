function minSubarray(nums: number[], p: number): number {
    let total = 0;
    for (let n of nums) total += n;

    const target = total % p;
    if (target === 0) return 0;

    const map = new Map<number, number>();
    map.set(0, -1);

    const n = nums.length;
    let prefix = 0;
    let answer = n;

    for (let i = 0; i < n; i++) {
        prefix = (prefix + nums[i]) % p;
        const need = (prefix - target + p) % p;

        if (map.has(need)) {
            answer = Math.min(answer, i - map.get(need));
        }

        map.set(prefix, i);
    }

    return answer === n ? -1 : answer;
};