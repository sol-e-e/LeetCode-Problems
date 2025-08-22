function permuteUnique(nums: number[]): number[][] {
    const result: number[][] = [];

    function backtrack(current: number[], remains: number[]) {
        if (!remains.length) result.push(current);
        let prev = null;
        for (let i = 0; i < remains.length; i++) {
            if (remains[i] === prev) continue;
            prev = remains[i];
            backtrack([...current, remains[i]], [...remains.slice(0, i), ...remains.slice(i + 1)]);
        }
    }

    backtrack([], nums);

    return result;
};