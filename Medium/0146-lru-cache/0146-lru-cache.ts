class LRUCache {
    capacity: number;
    map: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key: number): number {
        if (!this.map.has(key)) return -1;

        const value = this.map.get(key);

        this.map.delete(key);
        this.map.set(key, value);
        
        return value;
    }

    put(key: number, value: number): void {
        if (this.map.size >= this.capacity && !this.map.has(key)) {
            const evictKey = this.map.keys().next().value;
            this.map.delete(evictKey)
        }

        this.map.delete(key);
        this.map.set(key, value);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */