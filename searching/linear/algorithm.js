const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
};

console.log(linearSearch([1, 2, 3, 4, 5], 4)); // 3
console.log(linearSearch([14, 43, 32, 8, 12], 15)); // -1
console.log(linearSearch([21, 22, 29, 52, 67], 67)); // 4
