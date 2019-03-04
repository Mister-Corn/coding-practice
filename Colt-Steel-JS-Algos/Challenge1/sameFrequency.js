function sameFrequency(a, b) {
    // num -> num -> bool
    const str = function stringifyNumber(num) {
        // num -> str
        return num.toString();
    };
    const count = function createCountObject(str) {
        // str -> { [str]: num }
        let ret = {};
        for (const char of str) {
            ret[char] = (ret[char] || 0) + 1;
        }
        return ret;
    };

    // If numbers are different sizes, return false
    if (str(a).length !== str(b).length) {
        return false;
    }

    // Make frequency counter objects
    const aObj = count(str(a));
    const bObj = count(str(b));

    // Compare both objects
    // If there are any variances, return false
    for (const key in aObj) {
        if (aObj[key] !== bObj[key]) {
            return false;
        }
    }
    return true;
}

console.log(sameFrequency(22, 222));
console.log(sameFrequency(34,14));
console.log(sameFrequency(3589578, 5879385));