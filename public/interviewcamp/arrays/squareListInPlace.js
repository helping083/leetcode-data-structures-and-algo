export function squareLisftInPlace(arr) { 
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}