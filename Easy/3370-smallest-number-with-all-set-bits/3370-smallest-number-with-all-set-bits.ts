function smallestNumber(n: number): number {
    let answer = 2;

    while (answer - 1 < n) {
        answer *= 2;
    }

    return answer - 1;
};