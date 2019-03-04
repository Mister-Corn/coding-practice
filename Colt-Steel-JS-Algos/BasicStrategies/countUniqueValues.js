function countUniqueValues(arr) {
    // number[] -> number
    // We will have two pointers, left and right,
    // both starting at the same number.
    // Right will advance. If the value at index right
    // is different than the value at index left,
    // increment some counter variable
    // and move left pointer to right.
    let left = 0;
    let right = 0;
    let ret = arr.length ? 1 : 0;

    while (right < arr.length - 1) {
        if (arr[left] !== arr[++right]) {
            ret++;
            left = right;
        }
    }
    return ret;
}

console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([1,2,3,4,5,6,7]));
console.log(countUniqueValues([]));