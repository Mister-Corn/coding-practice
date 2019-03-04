// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, func){
    // add whatever parameters you deem necessary - good luck!
    function recur(input) {
        const workingArr = [...input];
        if (workingArr.length <= 0) return false;
        const current = workingArr.pop();
        return func(current) ? true : recur(workingArr);
    }
    return recur(arr);
}

const isOdd = val => val % 2 !== 0;
const testFunc = someRecursive;
const args = [
    [[1,2,3,4], isOdd, true],
    [[2,4,6,8], isOdd, false],
];

const tester = require('./tester');
tester(testFunc, args);