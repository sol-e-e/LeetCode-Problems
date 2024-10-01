/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const rows = new Map();
    const cols = new Map();
    
    for (let i = 0; i < grid.length; i++) {
        const str = grid[i].join('-')
        rows.set(str, (rows.get(str) || 0) + 1);
    }
    
    for (let i = 0; i < grid.length; i++) {
        const col = []
        for (let j = 0; j < grid.length; j++) {
            col.push(grid[j][i])
        }
        const str = col.join('-')
        if (rows.has(str)) {
            cols.set(str, (cols.get(str) || 0) + rows.get(str));
        }
    }
    
    return [...cols.values()].reduce((acc, cur) => acc + cur, 0)
};