/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
export var asteroidCollision = function(asteroids) {
    let stack = [];
    debugger;
    for(let i = 0; i < asteroids.length; i++) {
        if(asteroids[i] >= 0) {
            stack.push(asteroids[i]);
        } else {
            while(stack.length) {
                let temp = stack.pop();
                let abs = Math.abs(asteroids[i]);
                if(temp > abs) {
                    stack.push(temp);
                    break
                } else {
                    continue;
                }
            }
        }
    }
    return stack;
};
function colide(stack, left) {
    let temp = stack.pop();
    let abs = Math.abs(left);
    if(temp === abs) return;
    while(stack.length) {
        if(temp > abs) {
            stack.push(temp);
            break;
        } else {
            temp = stack.pop();
        }
    }
}