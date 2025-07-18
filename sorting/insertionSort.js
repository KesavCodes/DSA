const insertionSort = (arr, comparator) => {
  if (typeof comparator !== "function") {
    comparator = (num1, num2) => num1 - num2;
  }
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];
    let currentIndex = i - 1;
    while (
      currentIndex >= 0 &&
      comparator(currentValue, arr[currentIndex]) < 0
    ) {
      arr[currentIndex + 1] = arr[currentIndex];
      currentIndex--;
    }
    arr[currentIndex + 1] = currentValue;
  }
  return arr;
};

console.log(insertionSort([22, 1, 34, 26, 43, 16])); // [ 1, 16, 22, 26, 34, 43 ]
console.log(insertionSort([43, 54, 33, -2])); // [ -2, 33, 43, 54 ]
console.log(insertionSort([1, 2, 3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(insertionSort([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]

 
const kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}
 
console.log(insertionSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
 
const moarKittyData = [{
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
 
console.log(insertionSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
