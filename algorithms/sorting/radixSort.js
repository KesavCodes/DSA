const getNthDigitValue = (num, n) =>
  Number(String(num)[String(num).length - n]) || 0;

const radixSort = (arr) => {
  let maxValLen = 0;
  arr.forEach((elem) => {
    if (String(elem).length > maxValLen) maxValLen = String(elem).length;
  });
  for (let i = 1; i <= maxValLen; i++) {
    const newArr = Array(10)
      .fill(null)
      .map(() => []);
    arr.forEach((num) => newArr[getNthDigitValue(Math.abs(num), i)].push(num));
    arr = newArr.flat();
  }
  return arr;
};

console.log(radixSort([22, 1, 34, 26, 43, 16])); // [ 1, 16, 22, 26, 34, 43 ]
console.log(radixSort([43, 54, 33])); // [ 33, 43, 54 ]
console.log(radixSort([1, 2, 3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(radixSort([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]
console.log(radixSort([23535, 544, 34, 2, 2353])); // [ 2, 34, 544, 2353, 23535 ]

console.log(radixSort([8, 6, 1, 12])); // [1, 6, 8, 12]
console.log(radixSort([10, 100, 1, 1000, 10000000])); // [1, 10, 100, 1000, 10000000]
console.log(radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593])); 
// [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]

// console.log(getNthDigitValue(2343, 1)); //3
// console.log(getNthDigitValue(1653, 4)); //1
// console.log(getNthDigitValue(87452, 2)); // 5
// console.log(getNthDigitValue(122, 3)); // 1
// console.log(getNthDigitValue(242, 5)); // 0
