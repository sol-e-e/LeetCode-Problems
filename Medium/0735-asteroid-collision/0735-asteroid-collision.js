/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const result = [];

    while (asteroids.length) {
        const asteroid = asteroids.shift();
        if (asteroid < 0) {
            while (!!result.length && result[result.length - 1] > 0 && result[result.length - 1] + asteroid < 0) {
                result.pop();
            }

            if (result.length === 0 || result[result.length - 1] < 0) {
                result.push(asteroid);
            } else if (result[result.length - 1] + asteroid === 0){
                result.pop();
            }
        } else {
            result.push(asteroid);
        }
    }

    return result;
};