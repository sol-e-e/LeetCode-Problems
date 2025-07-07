function minimumTotal(triangle: number[][]): number {
    const len = triangle.length;
    let result = triangle[len - 1].slice();
    for (let i = len - 2; i >= 0; i--) {
        console.log(triangle[i], i);
        triangle[i].forEach((el, j) => {
            result[j] = Math.min(result[j], result[j + 1]) + triangle[i][j];
        })
    }

    return result[0];
};