function fib(num) {
    const mem = {};
    function recur(n){
        if (n === 0) return 0;
        if (n === 1) return 1;
        if (!mem[n]) {
            mem[n] = recur(n - 1) + recur(n - 2);
        }
        return mem[n];
    }
    return recur(num);
}

function slowFib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return slowFib(n - 1) + slowFib(n - 2);
}

const arg = 40;
console.time('fib');
console.log(fib(arg));
console.timeEnd('fib');
console.time('slowFib');
console.log(slowFib(arg));
console.timeEnd('slowFib');