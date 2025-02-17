function findMinArrowShots(points: number[][]): number {
    let result = 1;
    points.sort((a, b) => b[0] - a[0]);
    let target = points[0][0];
    for (const [s, e] of points) {
        if (target >= s && target <= e) {
            continue;
        } else {
            result++;
            target = s;
        }
    }

    return result;
};