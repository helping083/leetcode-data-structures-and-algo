export const removeVal = (nums, val) => {
    let counter = 0;
    for(let i = 0, j = 0; j < nums.length; j++) {
        if(nums[j] !== val) {
            nums[i] = nums[j];
            i++
        } else {
            counter++;
        }
    }
    nums.length = nums.length - counter
    console.log(nums)
    return nums;
}