function areThereDuplicates() {
    // ...args: char[] | num[] -> bool
    const numOfArgs = arguments.length;
    const args = [...arguments].sort();
    
    let left = 0,
        right = 0;
    
    while (right < numOfArgs - 1) {
        if (args[left] === args[++right]) {
            return true;
        } else {
            left = right;
        }
    }

    return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));