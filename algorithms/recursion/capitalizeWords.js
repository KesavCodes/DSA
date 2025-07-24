const capitalizedWords = (arr) => {
  if (arr.length === 0) return [];
  return [arr[0].toUpperCase()].concat(capitalizedWords(arr.slice(1)));
};

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']