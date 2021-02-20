export default class TwoSum {
    constructor(arr, target) {
        this.arr = arr;
        this.target = target;
    }

    bruteForce() {
        for(let i = 0; i < this.arr.length; i++) {
            for(let j = 1; j < this.arr.length; j++) {
                console.log(this.arr[j]);
            }
        }
    };

    twoPointers(){
        const sorted = this.arr.sort((a,b) => a-b);
        let start = 0;
        let end = this.arr.length-1;
        while(start <= end) {
            const sum = sorted[start] + sorted[end];
            if(sum === this.target) {
                console.log(sorted);
                console.log([start,end]);
                return [start,end];
            }
            if(sum < this.target) {
                start++;
            } else if(sum> this.target) {
                end--;
            }
        }
        console.log(sorted);
    };
    /** O(n)space and time */
    hashMap() {
        const hash = {};
        for(let i = 0; i < this.arr.length; i++) {
            const sum = this.target - this.arr[i];
            if(hash.hasOwnProperty(sum)) {
                console.log(this.arr);
                console.log([sum, this.arr[i]])
                return [sum, this.arr[i]];
            } else {
                hash[this.arr[i]] = true;
            }
        }
        console.log([])
        return [];
    };
}