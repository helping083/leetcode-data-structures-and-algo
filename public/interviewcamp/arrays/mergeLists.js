export function mergeLists(l1,l2) {
    let res = new Array(l1.length + l2.length);
    let i = 0;
    let l1Index = 0;
    let l2Index = 0;
    while(i < (l1.length + l2.length)) {
        if(l1[l1Index] < l2[l2Index]) {
            res[i] = l1[l1Index];
            l1Index++;
        } else {
            res[i] = l2[l2Index];
            l2Index++
        }
        i++;
        console.log(res);
    }
}
