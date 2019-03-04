function isSubsequence(target, src) {
    // str -> str -> bool
    let targetPointer = 0;
    
    for (const char of src) {
        const targetChar = target[targetPointer];
        if (char === targetChar) {
            targetPointer += 1;
        }
    }
    return targetPointer === target.length;
}

const args = [
    ['hello', 'hello world', true],
    ['sing', 'sting', true],
    ['abc', 'abracadabra', true],
    ['abc', 'acb', false],
];

const tester = require('../tester');
tester(isSubsequence, args);