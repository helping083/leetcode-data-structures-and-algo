export const prefixSum = (arr) => {
    let dp = [];
    dp.length = arr.length;
    dp[0] = arr[0];
    for(let i = 1; i < arr.length; i++) {
        dp[i] = dp[i - 1] + arr[i];
    }
    console.log(dp);
    return dp;
}