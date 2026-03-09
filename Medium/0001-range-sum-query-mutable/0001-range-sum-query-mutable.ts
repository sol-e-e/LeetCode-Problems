class NumArray {
    private tree: number[];
    private n: number;
    constructor(nums: number[]) {
        this.n = nums.length;
        this.tree = Array(4 * this.n).fill(0);
        this.build(nums, 1, 0, this.n - 1);
    }

    private build(arr: number[], node: number, start: number, end: number): void {
        if (start === end) {
            this.tree[node] = arr[start];
        } else {
            const mid = Math.floor((start + end) / 2);
            this.build(arr, 2 * node, start, mid);
            this.build(arr, 2 * node + 1, mid + 1, end);
            this.tree[node] = this.tree[node * 2] + this.tree[node * 2 + 1];
        }
    }

    update(index: number, val: number): void {
        this._update(1, 0, this.n - 1, index, val);
    }

    private _update(node: number, start: number, end: number, index: number, val: number): void {
        if (start === end) {
            this.tree[node] = val;
        } else {
            const mid = Math.floor((start + end) / 2);
            if (index <= mid) {
                this._update(node * 2, start, mid, index, val);
            } else {
                this._update(node * 2 + 1, mid + 1, end, index, val);
            }
            this.tree[node] = this.tree[node * 2] + this.tree[node * 2 + 1];
        }
    }

    sumRange(left: number, right: number): number {
        return this._sumRange(1, 0, this.n - 1, left, right);
    }

    private _sumRange(node: number, start: number, end: number, left: number, right: number): number {
        if (right < start || left > end) {
            return 0;
        }

        if (left <= start && right >= end) {
            return this.tree[node];
        }

        const mid = Math.floor((start + end) / 2);
        const leftSum = this._sumRange(node * 2, start, mid, left, right)
        const rightSum = this._sumRange(node * 2 + 1, mid + 1, end, left, right);
        return leftSum + rightSum;
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */