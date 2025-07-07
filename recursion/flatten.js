const flatten = (arr) => {
  const flattenedArr = [];
  const helper = (arr) => {
    if (arr.length === 0) return flattenedArr;
    const isFirstElemArr = Array.isArray(arr[0]);
    if (isFirstElemArr) {
      flattenedArr.concat(helper(arr[0]));
    } else {
      flattenedArr.push(arr[0]);
    }
    return helper(arr.slice(1));
  };
  return helper(arr);
};

console.log(flatten([1, 2, 3, [4, 5], 6])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
