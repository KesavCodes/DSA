const sumZero = (arr) => {
  let sumZeroIndexArr;
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    const sum = arr[i] + arr[j];
    if (sum === 0) {
      sumZeroIndexArr = [arr[i], arr[j]];
      break;
    } else if (sum > 0) {
      j -= 1;
    } else {
      i += 1;
    }
  }
  return sumZeroIndexArr;
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
