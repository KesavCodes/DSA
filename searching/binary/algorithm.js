const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) return mid;
    else if (arr[mid] > val) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
};

console.log(binarySearch([2, 4, 6, 7, 10], 7)); // 3
console.log(binarySearch([11, 22, 33, 44, 55], 55)); // 4
console.log(binarySearch([16, 32, 48, 64], 50)); // -1
console.log(binarySearch([5, 12, 54, 89, 100], 89)); //3
