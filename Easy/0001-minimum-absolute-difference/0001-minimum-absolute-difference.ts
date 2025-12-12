function minimumAbsDifference(arr: number[]): number[][] {
    arr.sort((a, b) => a - b);
    const n = arr.length;
    let min = arr[1] - arr[0];

    for (let i = 2; i < n; i++) {
        if (arr[i] - arr[i - 1] < min) {
            min = arr[i] - arr[i - 1];
        }
    }

    const result: number[][] = [];

    for (let i = 1; i < n; i++) {
        if (arr[i] - arr[i - 1] === min) {
            result.push([arr[i - 1], arr[i]]);
        }
    }

    return result;
};