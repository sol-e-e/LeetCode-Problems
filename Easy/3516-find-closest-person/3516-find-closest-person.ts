function findClosest(x: number, y: number, z: number): number {
    const diff = Math.abs(x - z) - Math.abs(y - z);
    return diff < 0 ? 1 : diff > 0 ? 2 : 0;
};