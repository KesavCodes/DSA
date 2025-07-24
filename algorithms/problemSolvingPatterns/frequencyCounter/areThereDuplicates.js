const areThereDuplicates = (...args) => {
  const hashSet = new Set();
  return !args.every((item) => {
    if (hashSet.has(item)) return false;
    hashSet.add(item);
    return true;
  });
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates(1, 2, 3, 4)); // false
console.log(areThereDuplicates("a", "b", "c")); // false
console.log(areThereDuplicates(1, "a", "c", "a", 2, 3)); // true
