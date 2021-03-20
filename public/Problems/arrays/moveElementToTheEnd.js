export const moveElementToTheEnd = (arr, val) => {
    let i = 0;
    let j = arr.length - 1;
    while(i < j) {
        while(i < j && arr[j] === val) {
            j-=1;
        }
        if(arr[i] === val) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        i++
    }
    console.log(arr);
    return arr;
}