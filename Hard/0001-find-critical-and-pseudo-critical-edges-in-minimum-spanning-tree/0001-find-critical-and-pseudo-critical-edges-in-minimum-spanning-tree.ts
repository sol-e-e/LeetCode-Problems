function findCriticalAndPseudoCriticalEdges(n: number, edges: number[][]): number[][] {
    const criticalEdges: number[] = [];
    const pseudoCriticalEdges: number[] = [];
    const indexedEdges: number[][] = edges.map((edge, i) => [...edge, i]).sort((a, b) => a[2] - b[2]);

    function kruskal(skipIdx: number, forcedEdge: number[] | null): number {
        const uf = new UnionFind(n);
        let totalWeight = 0;

        if (forcedEdge !== null) {
            if (uf.union(forcedEdge[0], forcedEdge[1])) {
                totalWeight += forcedEdge[2];
            }
        }
    
        for (const [u, v, weight, originalIdx] of indexedEdges) {
            if (originalIdx === skipIdx) continue;

            if (uf.union(u, v)) { 
                totalWeight += weight;
            }
        }
    
        return uf.components === 1 ? totalWeight : Infinity;
    }

    const originalWeight = kruskal(-1, null);

    for (const edge of indexedEdges) {
        const originalIdx = edge[3]

        const weightWithout = kruskal(originalIdx, null);
        if (weightWithout > originalWeight) {
            criticalEdges.push(originalIdx);
        } else {
            const weightWith = kruskal(-1, edge);
            if (weightWith === originalWeight) {
                pseudoCriticalEdges.push(originalIdx);
            }
        }
    }
    
    return [criticalEdges, pseudoCriticalEdges];
};

class UnionFind {
    parent: number[];
    rank: number[];
    components: number;
    
    constructor(n: number) {
        this.parent = Array.from({length: n}, (_, i) => i);
        this.rank = Array(n).fill(0);
        this.components = n;
    }
    
    find(x: number): number {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }
    
    union(x: number, y: number): boolean {
        const rootX = this.find(x);
        const rootY = this.find(y);
        
        if (rootX === rootY) return false; 
        
        if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
        
        this.components--;
        return true;
    }
}