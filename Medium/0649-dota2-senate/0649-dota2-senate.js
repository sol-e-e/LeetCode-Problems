/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    const queue = senate.split('');
    let rl = 0;
    let dl = 0;

    while (queue.length > 0) {
        if (rl > queue.length) return 'Radiant';
        if (dl > queue.length) return 'Dire';

        const senator = queue.shift();
        if (senator === 'R') {
            if (dl > 0) {
                dl--;
            }
            else {
                queue.push(senator);
                rl++;
            }
        }

         if (senator === 'D') {
            if (rl > 0) {
                rl--;
            }
            else {
                queue.push(senator);
                dl++;
            }
        }
    }
};