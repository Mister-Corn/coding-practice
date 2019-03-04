function same(arr1, arr2) {
    const createCountObj = (arr) => {
        const ret = {};
        arr.forEach((val) => {
            const valSquared = val * val;
            if (ret[valSquared]) {
                ret[valSquared]++;
            } else {
                ret[valSquared] = 1;
            }
        });
        return {...ret, length: arr1.length};
    }
    
    const compare = (countObj, arr) => {
        const count = {...countObj};
        // If arr lengths are different, 
        // frequencies are different, so return false
        if (count.length !== arr.length) {
            return false;
        }

        for (const val of arr) {
            if (--count[val] < 0) {
                return false;
            }
        }
        return true;
    }

    return compare(createCountObj(arr1), arr2);
}

console.log(same([1,2,3], [4,1,9]));
console.log(same([1,2,3], [1,9]));
console.log(same([1,2,1], [4,4,1]));