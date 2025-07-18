const selectionSort = (arr, comparator) => {
  if (typeof comparator !== "function") {
    comparator = (num1, num2) => num1 - num2;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let minElementIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[minElementIndex], arr[j]) > 0) minElementIndex = j;
    }
    if (i !== minElementIndex) {
      const temp = arr[i];
      arr[i] = arr[minElementIndex];
      arr[minElementIndex] = temp;
    }
  }
  return arr;
};

console.log(selectionSort([22, 1, 34, 26, 43, 16])); // [ 1, 16, 22, 26, 34, 43 ]
console.log(selectionSort([43, 54, 33, -2])); // [ -2, 33, 43, 54 ]
console.log(selectionSort([1, 2, 3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(selectionSort([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]



var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}
 
console.log(selectionSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
 
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
 
console.log(selectionSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
