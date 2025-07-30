function minOperations(boxes: string): number[] {
    const n = boxes.length;
    let answer = new Array(n).fill(0);
    let count = 0, move = 0;

    // left -> right
    for (let i = 1; i < n; i++) {
        if (boxes[i - 1] === '1') {
            count += 1;
        }
        answer[i] += answer[i - 1] + count;
    }

    count = 0;
    // right -> left
    for (let i = n - 2; i >= 0; i--) {
        if (boxes[i + 1] === '1') {
            count += 1;
        }
        move += count;
        answer[i] += move;
    }

    return answer;
};