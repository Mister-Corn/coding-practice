// require('./Challenge1/isSubsequence');

function flatten(input){
  // add whatever parameters you deem necessary - good luck!
  let retArr = [];

  function recur(arr) {
      for (const elem of arr) {
          if (Array.isArray(elem)) {
              recur(elem);
          } else {
              retArr.push(elem);
          }
      }
  }
  recur(input);
  return retArr;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

const testFunc = flatten;
const args = [
    [[1, 2, 3, [4, 5] ], [1, 2, 3, 4, 5]],
    [[1, [2, [3, 4], [[5]]]], [1, 2, 3, 4, 5]],
];

const tester = require('./tester');
tester(testFunc, args);