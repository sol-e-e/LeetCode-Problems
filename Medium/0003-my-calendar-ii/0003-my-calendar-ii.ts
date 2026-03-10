class MyCalendarTwo {
    private single: [number, number][] = [];
    private double: [number, number][] = [];

    constructor() {}

    book(startTime: number, endTime: number): boolean {
        if (this.hasOverlap(this.double, startTime, endTime)) {
            return false;
        }

        this.addOverlaps(this.single, startTime, endTime);
        
        this.single.push([startTime, endTime]);
        return true;
    }

    private hasOverlap(events: [number, number][], start: number, end: number): boolean {
        for (const [s, e] of events) {
            if (Math.max(start, s) < Math.min(end, e)) {
                return true;
            }
        }
        return false;
    }

    private addOverlaps(events: [number, number][], start: number, end: number) {
        for (const [s, e] of events) {
            const overlapStart = Math.max(start, s);
            const overlapEnd = Math.min(end, e);

            if (overlapStart < overlapEnd) {
                this.double.push([overlapStart, overlapEnd])
            }
        }
    }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(startTime,endTime)
 */