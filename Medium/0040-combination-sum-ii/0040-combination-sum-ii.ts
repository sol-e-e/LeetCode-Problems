function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort();
    const result: number[][] = [];
    const current: number[] = [];
    let sum = 0;

    function backtrack(remains: number[]) {
        if (sum > target) return;
        if (sum === target) {
            result.push([...current]);
            return;
        }

        let prev = null;
        for (let i = 0; i < remains.length; i++) {
            const candidate = remains[i];
            if (prev === candidate) continue;
            prev = candidate;
            current.push(candidate);
            sum += candidate;
            backtrack(remains.slice(i + 1));
            current.pop();
            sum -= candidate;
        }
    }

    backtrack([...candidates]);

    return result;
};