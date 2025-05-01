/**
 * Definition for _Node.
 * class _Node {
 *     val: boolean
 *     isLeaf: boolean
 *     topLeft: _Node | null
 * 	topRight: _Node | null
 * 	bottomLeft: _Node | null
 * 	bottomRight: _Node | null
 * 	constructor(val?: boolean, isLeaf?: boolean, topLeft?: _Node, topRight?: _Node, bottomLeft?: _Node, bottomRight?: _Node) {
 *         this.val = (val===undefined ? false : val)
 *         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
 *         this.topLeft = (topLeft===undefined ? null : topLeft)
 *         this.topRight = (topRight===undefined ? null : topRight)
 *         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
 *         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
 *   }
 * }
 */


function construct(grid: number[][]): _Node | null {
    const len = grid.length;
    const flatted = grid.flat();
    const isLeaf = flatted.every(val => val === flatted[0]);

    let node: _Node | null = new _Node(!!flatted[0], isLeaf);

    if (!isLeaf) {
        const [tl, tr, bl, br] = [[], [], [], []];
        for (let i = 0; i < len; i++) {
            if (i < len /2) {
                tl.push(grid[i].slice(0, len /2));
                tr.push(grid[i].slice(len/2));
            } else {
                bl.push(grid[i].slice(0, len /2));
                br.push(grid[i].slice(len/2));
            }
        }
        node.topLeft = construct(tl);
        node.topRight = construct(tr);
        node.bottomLeft = construct(bl);
        node.bottomRight = construct(br);
    }

    return node;
};