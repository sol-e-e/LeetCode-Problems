class SmallestInfiniteSet {
    current: number[];

    constructor() {
        this.current = [1];
    }

    popSmallest(): number {
        const num = this.current.shift();
        if (!this.current.length) {
            this.current.push(num + 1);
        }
        return num;
    }

    addBack(num: number): void {
        if (num < this.current[this.current.length - 1]) {
            if (!this.current.includes(num)) {
                this.current.push(num);
                this.current.sort((a, b) => a - b);
            }
        }
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */