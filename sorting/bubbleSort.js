// The largest element bubbles up to the top
const bubbleSort = (arr, comparator) => {
  if (typeof comparator !== "function") {
    comparator = (num1, num2) => num1 - num2;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (comparator(arr[j], arr[j + 1]) > 0) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
};

console.log(bubbleSort([22, 1, 34, 26, 43, 16])); // [ 1, 16, 22, 26, 34, 43 ]
console.log(bubbleSort([43, 54, 33, -2])); // [ -2, 33, 43, 54 ]
console.log(bubbleSort([1, 2, 3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(bubbleSort([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]


var moreKittyData = [{
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
 
console.log(bubbleSort(moreKittyData, oldestToYoungest))
