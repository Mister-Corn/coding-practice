function productOfAllOtherNumbersDiv(arr) {
    // With division
    const totalProduct = arr.reduce((acc, num) => acc * num); 
    return arr.map(num => totalProduct / num);
}

function productOfAllOtherNumbersNaive(arr) {
    // Naive solution
    // O(n^2)
    let retValue = [];
    for (let i = 0; i < arr.length; i++) {
        retValue.push(arr.reduce((acc, num, index) => {
            return i !== index ? acc * num : acc;
        }));
    }
    return retValue;
}

function productOfAllOtherNumbersLinear(arr) {
    // Linear solution
    // Had to look this one up :'(
    let retValue = [];
    let productSoFar = 1;
    for (const num of arr) {
        retValue.push(productSoFar);
        productSoFar *= num;
    }

    productSoFar = 1;
    for (let j = arr.length - 1; j >= 0; j--) {
        retValue[j] *= productSoFar;
        productSoFar *= arr[j]/*?*/;
    }
    return retValue; //?
}
console.log(productOfAllOtherNumbersDiv([1,7,3,4]));
console.log(productOfAllOtherNumbersNaive([1,7,3,4]));
console.log(productOfAllOtherNumbersLinear([1,7,3,4]));