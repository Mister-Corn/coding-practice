function countUniqueValues(arr) {
    let left = 0, right = 0;
    let uniques = arr.length ? 1 : 0;

    while (right < arr.length - 1) {
        if (arr[left] !== arr[++right]) {
            uniques++;
            left = right;
        }
    }

    return uniques;
}

console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([1,2,3,4]));