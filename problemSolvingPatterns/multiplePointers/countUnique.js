const countUniqueValues = (arr) => {
  let uniqueValues = 0;
  let p1 = 0;
  let p2 = 0;
  while (p2 < arr.length) {
    if (arr[p2] !== arr[p1] || p2 === 0) {
      uniqueValues++;
      p1 = p2;
    }
    p2++;
  }
  return uniqueValues;
};

function countUniqueValuesApproach2(arr) {
  if (arr.length === 0) return arr.length;
  let p1 = 0;
  let p2 = 1;
  while (p2 < arr.length) {
    if (arr[p2] !== arr[p1]) {
      p1++;
      arr[p1] = arr[p2];
    }
    p2++;
  }
  return p1 + 1;
}

console.log("Approach 1: ");
console.log(countUniqueValues([1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 5, 7, 7, 8, 8, 10, 13])); // 8
console.log(countUniqueValues([])); // 0
console.log(
  countUniqueValues([-2, -1, 0, 12, 12, 13, 13, 13, 13, 14, 14, 15, 15, 15])
); // 7

console.log("Approach 2: ");
console.log(countUniqueValuesApproach2([1, 1, 1, 1, 2])); // 2
console.log(countUniqueValuesApproach2([1, 2, 3, 5, 7, 7, 8, 8, 10, 13])); // 8
console.log(countUniqueValuesApproach2([])); // 0
console.log(
  countUniqueValuesApproach2([
    -2, -1, 0, 12, 12, 13, 13, 13, 13, 14, 14, 15, 15, 15,
  ])
); // 7
