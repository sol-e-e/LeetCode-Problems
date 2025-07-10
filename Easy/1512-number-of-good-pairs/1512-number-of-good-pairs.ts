function numIdenticalPairs(nums: number[]): number {
    let answer = 0;
    const map: Map<number, number[]> = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) map.get(nums[i]).push(i);
        else map.set(nums[i], [i]);
    }

    for (const val of map.values()) {
        answer += (val.length * (val.length - 1)) / 2;
    }

    return answer;
};