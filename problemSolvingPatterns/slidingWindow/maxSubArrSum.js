const maxSubArraySum = (arr, size) => {
  if (arr.length < size) return null;
  let maxSum = 0;
  for (let i = 0; i < size; i++) {
    maxSum += arr[i];
  }
  let currentSum = maxSum;
  for (let j = size; j < arr.length; j++) {
    currentSum = currentSum + arr[j] - arr[j - size];
    if (currentSum > maxSum) maxSum = currentSum;
  }
  return maxSum;
};

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubArraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubArraySum([-4, -2, -1, -6, -2], 3)); // -7
console.log(maxSubArraySum([4, 2, 1, 6, 2], 20)); // null
console.log(maxSubArraySum([], 4)); // null
