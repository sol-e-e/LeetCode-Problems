function twoSum(numbers: number[], target: number): number[] {
    let start = 0, end = numbers.length - 1;

    while (start < end) {
        const sum = numbers[start] + numbers[end];
        if (sum === target) break;

        if (sum < target) start++;
        else end--;
    }

    return [start + 1, end + 1];
};