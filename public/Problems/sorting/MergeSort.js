let a = 0;
export const mergeSort = (arr) => {

    if(arr.length === 1) return arr;
    const medium = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, medium));
    const right = mergeSort(arr.slice(medium));
    let i = 0;
    let j = 0;
    let ans = [];
    
    while(i < left.length && j < right.length){
        if(right[j] > left[i]) {
            ans.push(left[i]);
            i++
        } else {
            ans.push(right[j]);
            j++
        }
    }
    while(i < left.length) {
        ans.push(left[i]);
        i++
    }
    while(j < right.length) {
        ans.push(right[j]);
        j++
    }
    console.log(ans);
    return ans;
}