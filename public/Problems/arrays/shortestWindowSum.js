export const smallestSubArrayWithGivenSum = (arr, target) => {
    let sum = 0;
    let windowStart = 0;
    let minWindow = 0;
    debugger;
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        sum+=arr[windowEnd];
        while(sum >= target) {
            minWindow = Math.min(minWindow, windowEnd - windowStart + 1);
            sum-=arr[windowStart];
            windowStart++;
        }
    }
    console.log(minWindow);
    return minWindow;
}