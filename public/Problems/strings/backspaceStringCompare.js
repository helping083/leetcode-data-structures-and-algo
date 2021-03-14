/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
 export var backspaceCompare = function(S, T) {
    let first = [];
    let second = [];
    for(let i = 0; i < S.length; i++) {
        if(S[i] === '#') {
            first.pop();
        } else {
            first.push();
        }
    }
    for(let i = 0; i < T.length; i++) {
        if(T[i] === '#') {
            second.pop();
        } else {
            second.push();
        }
    }
    debugger
    return first.join('') === second.join('');
};