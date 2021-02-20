export default class ProductSum {
    constructor(arr) {
        this.arr = arr;
    }
    productSum(arr) {
        return arr.reduce((prev,curr) => {
            if(Array.isArray(curr)) {
                return prev + this.productSum(curr)
            } else {
                return prev+curr;
            }
        },0)
    }
}