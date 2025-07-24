const isSame = (arr1, arr2) => {
  if(arr1.length !== arr2.length) return false;
  const counter = {};
  arr1.forEach((elem) => (counter[elem*elem] = (counter[elem*elem] ?? 0) + 1));
  return arr2.every((elem) => {
    if (counter[elem]) {
      counter[elem]--;
      return true;
    }
    return false;
  });
};

console.log(isSame([1, 2, 3], [4, 1, 9])); // true
console.log(isSame([1, 2, 3], [1, 9]));    // false
console.log(isSame([1, 2, 1], [4, 4, 1])); // false (must be same frequency)
