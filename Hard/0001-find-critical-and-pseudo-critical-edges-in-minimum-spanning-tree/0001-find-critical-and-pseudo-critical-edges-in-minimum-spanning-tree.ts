function findCriticalAndPseudoCriticalEdges(n: number, edges: number[][]): number[][] {
    const criticalEdges: number[] = [];
    const pseudoCriticalEdges: number[] = [];
    const indexedEdges: number[][] = edges.map((edge, i) => [...edge, i]).sort((a, b) => a[2] - b[2]);

    const [originWeight, maxWeight] = kruskal(n, indexedEdges);

    for (const [u, v, weight, originIdx] of indexedEdges) {
        if (weight > maxWeight) break;

        const [weightWithout] = kruskal(n, indexedEdges, originIdx);
        if (weightWithout > originWeight) {
            criticalEdges.push(originIdx);
            continue;
        }

        const [weightWith] = kruskal(n, indexedEdges, undefined, originIdx);
        if (weightWith === originWeight) {
            pseudoCriticalEdges.push(originIdx);
        }
    }
    
    return [criticalEdges, pseudoCriticalEdges];
};


function kruskal(n: number, edges: number[][], skipIdx?: number, forcedIdx?: number): [number, number] {
    const uf = new UnionFind(n);
    let totalWeight = 0;
    let maxWeight = 0;
    let edgeCount = 0;

    if (forcedIdx !== undefined) {
        const forcedEdge = edges.find(([u, v, w, idx]) => idx === forcedIdx)!;
        if (uf.union(forcedEdge[0], forcedEdge[1])) {
        totalWeight += forcedEdge[2];
        edgeCount++;
    }
    }
    
    for (const [u, v, weight, originIdx] of edges) {
        if (originIdx === skipIdx || originIdx === forcedIdx) continue;

        if (uf.union(u, v)) { 
            totalWeight += weight;
            maxWeight = weight;
            edgeCount++;
            if (edgeCount === n - 1) break;
        }
    }
    
    return edgeCount === n - 1 ?  [totalWeight, maxWeight] : [Infinity, 0];
}

class UnionFind {
    parent: number[];
    rank: number[];
    
    constructor(n: number) {
        this.parent = Array.from({length: n}, (_, i) => i);
        this.rank = Array(n).fill(0);
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
        
        return true;
    }
}