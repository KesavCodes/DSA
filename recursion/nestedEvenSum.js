const nestedEvenSum = (obj) => {
  let currentSum = 0;
  Object.values(obj).forEach((value) => {
    if (typeof value === "object" && value !== null) {
      currentSum += nestedEvenSum(value);
    } else if (typeof value === "number" && value % 2 === 0)
      currentSum += value;
  });
  return currentSum;
};

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
