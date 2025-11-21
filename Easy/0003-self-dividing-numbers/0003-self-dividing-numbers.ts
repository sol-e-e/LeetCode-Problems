function selfDividingNumbers(left: number, right: number): number[] {
    const result = [];
    for (let num = left; num <= right; num++) {
        num.toString().split('').every((digit) => num % +digit === 0) && result.push(num);
    }
    return result;
};