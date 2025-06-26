const findAllDuplicates = (arr) => {
  const hashSet = new Set();
  const duplicatedElements = [];
  arr.forEach((elem) => {
    if (hashSet.has(elem)) {
      duplicatedElements.push(elem);
    }
    hashSet.add(elem);
  });
  return duplicatedElements;
};

console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // array with 3, 2, and 1
