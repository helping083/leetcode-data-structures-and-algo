export const addToArrayForm = function(A, K) {
    let carry = K;
    for(let i = A.length-1; i >= 0; i--) {
        carry+=A[i];
        let digit = carry % 10;
        A[i] = digit;
        carry = Math.floor(carry / 10);
    }
    while(carry) {
        A.unshift(carry % 10);
        carry = Math.floor(carry / 10);
    }
    return A;
};