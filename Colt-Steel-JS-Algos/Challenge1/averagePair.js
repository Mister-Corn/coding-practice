function averagePair(arr, target) {
  // num[] -> num -> bool
  let left = 0,
    right = arr.length ? arr.length - 1 : 0;

  while (left !== right) {
    let average = (arr[left] + arr[right]) / 2;
    if (average === target) {
      return true;
    } else if (average < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return false;
}

console.log('Starting');
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

