function mySqrt(x: number): number {
    if (x <= 1) return x;

    let result = 1;
    for (let i = 2; i < x; i++) {
        if (i * i > x) return result;
        result = i;
    }

    return result;
};