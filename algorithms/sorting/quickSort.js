const pivotHelper = (arr, start, end, comparator) => {
  if (typeof comparator !== "function") {
    comparator = (num1, num2) => num1 - num2;
  }
  let pivotValue = arr[start];
  let lowerElementCount = start;
  for (let i = start + 1; i < end; i++) {
    if (comparator(arr[i], pivotValue) < 0) {
      lowerElementCount += 1;
      [arr[i], arr[lowerElementCount]] = [arr[lowerElementCount], arr[i]];
    }
  }
  [arr[start], arr[lowerElementCount]] = [arr[lowerElementCount], arr[start]];
  return lowerElementCount;
};

const quickSort = (arr, start, end) => {
  if (start >= end) return arr;
  const pivot = pivotHelper(arr, start, end);
  quickSort(arr, start, pivot);
  quickSort(arr, pivot + 1, end);
  return arr;
};

console.log(quickSort([22, 1, 34, 26, 43, 16], 0, 6)); // [ 1, 16, 22, 26, 34, 43 ]
console.log(quickSort([43, 54, 33, -2], 0, 4)); // [ -2, 33, 43, 54 ]
console.log(quickSort([1, 2, 3, 4, 5], 0, 5)); // [ 1, 2, 3, 4, 5 ]
console.log(quickSort([5, 4, 3, 2, 1], 0, 5)); // [ 1, 2, 3, 4, 5 ]

// [5, 2, 1, 8, 4, 7, 6, 3]; // place i , where value > pivot and j in value < pivot
// //p       i           j
// [5, 2, 1, 3, 4, 7, 6, 8]; // stop when j < i
// //   j  i
// [4, 2, 1, 3, 5, 7, 6, 8]; // replace j with pivot, not the pivot is in sorted pos

var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];

console.log(pivotHelper(arr1, 0, 9)); // 3
console.log(pivotHelper(arr2, 0, 10)); // 4

var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strLength(a, b) {
  return a.length - b.length
}
 
console.log(pivotHelper(arr3,0, 5, strLength)); // 1