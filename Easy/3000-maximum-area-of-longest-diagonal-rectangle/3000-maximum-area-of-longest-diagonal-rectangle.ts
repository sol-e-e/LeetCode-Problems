function areaOfMaxDiagonal(dimensions: number[][]): number {
    let answer = 0;
    let diagonal = 0;

    for (const [l, w] of dimensions) {
        const current = Math.sqrt(l * l + w * w);
        if (current - diagonal >= 0) {
            diagonal = current;
            answer = Math.max(answer, l * w);
        }
    }

    return answer;
};