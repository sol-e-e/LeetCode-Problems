function zeroFilledSubarray(nums: number[]): number {
    let len: number = 0;
    let answer: number = 0;

    for (let num of nums) {
        if (num === 0) {
            len += 1;
            answer += len;
        } else if (len !== 0) {
            len = 0;
        }
    }

    return answer;
};