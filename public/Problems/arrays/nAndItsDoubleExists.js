/**
 * @param {number[]} arr
 * @return {boolean}
 */
 export var checkIfExist = function(arr) {
    let hash = {};
    for(let i = 0; i < arr.length; i++) {
        let temp = arr[i] * 2;
        let div = arr[i] / 2
        if(hash.hasOwnProperty(temp) || hash.hasOwnProperty(div)) {
            return true;
        } else {
            hash[arr[i]] = true;
        }
    }
    return false
};