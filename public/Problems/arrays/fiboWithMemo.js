export const fiboWithMemo = (n, memo = {1: 0, 2: 1}) => {
    if(memo.hasOwnProperty(n)) {
        return memo[n]
    } else {
        memo[n] = fiboWithMemo(n-1, memo) + fiboWithMemo(n-2, memo);
    }
    return memo[n];
}