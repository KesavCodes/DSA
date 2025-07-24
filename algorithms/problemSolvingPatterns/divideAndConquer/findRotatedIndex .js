const binarySearch = (arr, num, left, right) => {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

const findRotatedIndex = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  let rotatedAt = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid + 1] < arr[mid]) {
      rotatedAt = mid+1;
      break;
    } else if (arr[mid] > arr[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // return rotatedAt;
  if (num >= arr[0]) return binarySearch(arr, num, 0, rotatedAt - 1);
  return binarySearch(arr, num, rotatedAt, arr.length - 1);
};

console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)); // 5
