const binarySearchUtil = (arr, num, type) => {
  let left = 0;
  let right = arr.length;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) {
      if (type === "start") {
        if (arr[mid - 1] !== num) return mid;
        right = mid - 1;
      } else {
        if (arr[mid + 1] !== num) return mid;
        left = mid + 1;
      }
    } else if (arr[mid] < num) {
      left = mid + 1;
    } else right = mid - 1;
  }
  return null;
};

const sortedFrequency = (arr, num) => {
  const startIndex = binarySearchUtil(arr, num, "start");
  if (startIndex === null) return -1;
  const endIndex = binarySearchUtil(arr, num, "end");
  return endIndex - startIndex + 1;
};

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1)
