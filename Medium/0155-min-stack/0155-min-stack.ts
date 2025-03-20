class MinStack {
    private stack: { val: number, min: number}[];
    private size: number;
    constructor() {
        this.stack = [];
        this.size = -1;
    }

    push(val: number): void {
        if (this.size < 0) {
            this.stack.push({val, min: val});
        } else {
            this.stack.push({val, min: Math.min(this.stack[this.size].min, val)});
        }
        this.size++;
    }

    pop(): void {
        this.stack.pop();
        this.size--;
    }

    top(): number {
        return this.stack[this.size].val;
    }

    getMin(): number {
        return this.stack[this.size].min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */