export const reverseWord = str => {
    let ans = str.split('');
    let start = 0;
    let end = ans.length - 1;
    while(start < end) {
        [ans[start], ans[end]] = [ans[end], ans[start]];
        start++;
        end--;
    }
    ans.join('');
    console.log(ans);
}