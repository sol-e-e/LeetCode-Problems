function reverseBits(n: number): number {
    let result = 0;
    let mul = 1;
    const str = n.toString(2).padStart(32, '0');
    for (let i = 0; i < 32; i++) {
        result += Number(str[i]) * mul;
        mul *= 2;
    }

    return result;
};