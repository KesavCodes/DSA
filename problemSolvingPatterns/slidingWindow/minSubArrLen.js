const minSubArrayLen = (arr, num) => {
  let smallestSubArrLen = Infinity;
  let currentTotal = 0;
  let startIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    currentTotal += arr[i];
    while (currentTotal >= num && startIndex <= i) {
      currentTotal = currentTotal - arr[startIndex];
      smallestSubArrLen = Math.min(smallestSubArrLen, i - startIndex + 1);
      startIndex += 1;
    }
  }

  return smallestSubArrLen === Infinity ? 0 : smallestSubArrLen;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
