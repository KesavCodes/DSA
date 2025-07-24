const findPairApproach1 = (arr, num) => {
  const hashSet = new Set();
  return arr.some((elem) => {
    const diff1 = elem + num;
    const diff2 = elem - num;
    if (hashSet.has(diff1) || hashSet.has(diff2)) return true;
    hashSet.add(elem);
    return false;
  });
};

const findPairApproach2 = (arr, num) => {
  const sortedArr = arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const diff = sortedArr[right] - sortedArr[left];
    if (diff === num || diff === -num) return true;
    else if (diff > num) {
      right--;
    } else left++;
  }
  return false;
};

console.log(findPairApproach2([6, 1, 4, 10, 2, 4], 2)); // true
console.log(findPairApproach2([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
console.log(findPairApproach2([4, -2, 3, 10], -6)); // true
console.log(findPairApproach2([6, 1, 4, 10, 2, 4], 22)); // false
console.log(findPairApproach2([], 0)); // false
console.log(findPairApproach2([5, 5], 0)); // true
console.log(findPairApproach2([-4, 4], -8)); // true
console.log(findPairApproach2([-4, 4], 8)); // true
console.log(findPairApproach2([1, 3, 4, 6], -2)); // true
console.log(findPairApproach2([0, 1, 3, 4, 6], -2)); // true
console.log(findPairApproach2([1, 2, 3], 0)); // false
