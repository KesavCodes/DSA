const countZeroes = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let hasOnlyOnes = true;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid - 1] === 1 && arr[mid + 1] === 0) return arr.length - mid;
    else if (arr[mid] === 0) {
      right = mid - 1;
      hasOnlyOnes = false;
    } else left = mid + 1;
  }
  return hasOnlyOnes ? 0 : arr.length;
};

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
