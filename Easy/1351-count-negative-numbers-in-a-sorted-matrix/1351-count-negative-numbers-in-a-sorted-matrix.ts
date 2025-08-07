function countNegatives(grid: number[][]): number {
    const m = grid.length, n = grid[0].length;
    let count = 0;

    for (let i = 0; i < m; i++) {
        const row = grid[i];
        let left = 0, right = n - 1;
        
        if (row[right] >= 0) continue;

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);

            if (row[mid] >= 0) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        count += n - left;
    }

    return count;
};
