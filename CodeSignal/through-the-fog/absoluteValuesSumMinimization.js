function absoluteValuesSumMinimization(a) {
    // Naive
    let sum = 0;
    let min = Infinity;
    let ans;
    
    for (const x of a) {
        for (const y of a) {
            sum += Math.abs(x - y); //?
        }
        if (min > sum) {
            min = sum;
            ans = x;
        }
        sum = 0;
    }

    return ans;
}

// archimedez solution
function absoluteValuesSumMinimization(A) {
    return A[Math.ceil(A.length/2)-1];
}

a = [2, 4, 7];
console.log(absoluteValuesSumMinimization(a));