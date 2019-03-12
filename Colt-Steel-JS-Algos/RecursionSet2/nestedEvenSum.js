function nestedEvenSum(obj) {
  // add whatever parameters you deem necessary - good luck!
  let sum = 0;
  const recur = obj => {
    for (const key in obj) {
      const value = obj[key]; //?
      console.log("value:", value); //?
      if (value % 2 === 0) {
        sum += value;
      } else if (typeof value === "object") {
        recur(value);
      }
    }
    return;
  };
  recur(obj);
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" }
};

// obj1 expect 6
// obj2 expect 10
nestedEvenSum(obj1); //?
nestedEvenSum(obj2); //?
