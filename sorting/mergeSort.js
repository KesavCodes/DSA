const mergeTwoSortedArr = (arr1, arr2) => {
  let p1 = 0;
  let p2 = 0;
  const sortedArr = [];
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) sortedArr.push(arr1[p1++]);
    else sortedArr.push(arr2[p2++]);
  }
  if (p1 !== arr1.length) sortedArr.push(...arr1.slice(p1));
  else sortedArr.push(...arr2.slice(p2));
  return sortedArr;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return mergeTwoSortedArr(left, right);
};

console.log(mergeSort([22, 1, 34, 26, 43, 16])); // [ 1, 16, 22, 26, 34, 43 ]
console.log(mergeSort([43, 54, 33, -2])); // [ -2, 33, 43, 54 ]
console.log(mergeSort([1, 2, 3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(mergeSort([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]