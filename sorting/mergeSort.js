const mergeTwoSortedArr = (arr1, arr2, comparator) => {
  if (typeof comparator !== "function") {
    comparator = (num1, num2) => num1 - num2;
  }
  let p1 = 0;
  let p2 = 0;
  const sortedArr = [];
  while (p1 < arr1.length && p2 < arr2.length) {
    if (comparator(arr1[p1], arr2[p2]) < 0) sortedArr.push(arr1[p1++]);
    else sortedArr.push(arr2[p2++]);
  }
  if (p1 !== arr1.length) sortedArr.push(...arr1.slice(p1));
  else sortedArr.push(...arr2.slice(p2));
  return sortedArr;
};

const mergeSort = (arr, comparator) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid), comparator);
  const right = mergeSort(arr.slice(mid), comparator);
  return mergeTwoSortedArr(left, right, comparator);
};

console.log(mergeSort([22, 1, 34, 26, 43, 16])); // [ 1, 16, 22, 26, 34, 43 ]
console.log(mergeSort([43, 54, 33, -2])); // [ -2, 33, 43, 54 ]
console.log(mergeSort([1, 2, 3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(mergeSort([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]


var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}
 
console.log(mergeSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
 
var moarKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];
 
function oldestToYoungest(a, b) {
  return b.age - a.age;
}
 
console.log(mergeSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order