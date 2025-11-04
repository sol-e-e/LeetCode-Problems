function findXSum(nums: number[], k: number, x: number): number[] {
    const n = nums.length;
    const answer: number[] = [];

    for (let i = 0; i < n - k + 1; i++) {
        const sub = nums.slice(i, i + k);
        const map = new Map();
        for (const s of sub) {
            map.set(s, (map.get(s) || 0) + 1);
        }

        const arr = Array.from(map.entries()).sort((a, b) => {
            return a[1] === b[1] ? b[0] - a[0] : b[1] - a[1];
        });

        if (arr.length <= x) {
            answer.push(arr.reduce((a, c) => a + c[0] * c[1], 0));
        } else {
            let sum = 0;
            for (let j = 0; j < x; j++) {
                sum += arr[j][0] * arr[j][1];
            }
            answer.push(sum);
        }
    }

    return answer;
};