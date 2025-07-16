class RandomizedSet {
    private set: Set<number>;

    constructor() {
        this.set = new Set<number>();
    }

    insert(val: number): boolean {
        if (this.set.has(val)) return false;
        this.set.add(val);
        return true;
    }

    remove(val: number): boolean {
        if (!this.set.has(val)) return false;
        this.set.delete(val);
        return true;
    }

    getRandom(): number {
        const rIndex = Math.floor(Math.random() * (this.set.size));
        return [...this.set][rIndex];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */