function jump(nums: number[]): number {
    if (nums.length === 1) return 0;
    
    let count = 0, current = 0, distance = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        distance = Math.max(distance, nums[i] + i);
        if (i === current) {
            count++;
            current = distance;
        }
    }

    return count;
};