export default class ValidateSubsequence {
    constructor(val, target) {
        this.val = val;
        this.target = target;
    }
    twoPointers() {
        let start = 0;
        let second = 0;
        debugger
        while(start < this.val.length && second < this.target.length) {
            if(this.val[start] === this.target[second]) {
                second++;
            }
            start++;
        }
        console.log(this.target.length)
        return second === this.target.length;
    }
}