class StockSpanner {
    // [price, span]
    private stack: [[number,  number]];
    constructor() {
        this.stack = [[0, 0]]
    }

    next(price: number): number {
        let span = 1;
        while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
            span += this.stack[this.stack.length - 1][1];
            this.stack.pop();
            
        }
        this.stack.push([price, span]);

        return span;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */