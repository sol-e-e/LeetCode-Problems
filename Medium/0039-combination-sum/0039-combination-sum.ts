function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    const current: number[] = [];
    let sum = 0;

    function backtrack(remains: number[]) {
        if (sum > target) return;
        if (sum === target) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < remains.length; i++) {
            const candidate = remains[i];
            current.push(candidate);
            sum += candidate;
            backtrack(remains.slice(i));
            sum -= candidate;
            current.pop();
        }
    }

    backtrack(candidates.slice());

    return result;
};