export const binarySearchRecursive = (arr, target) => {
    return binarySearchHelper(arr, 0, arr.length - 1, target);
}
function binarySearchHelper(arr, left, right, target) {
    if(left > right) {
        return -1;
    }
    let middle = Math.floor((left + right) / 2);
    if(target === arr[middle]) {
        return middle;
    } else if(target < arr[middle]) {
        return binarySearchHelper(arr, left, middle-1, target);
    } else {
        return binarySearchHelper(arr, middle + 1, right, target);
    }
}