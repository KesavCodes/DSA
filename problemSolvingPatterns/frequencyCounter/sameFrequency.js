const sameFrequency = (num1, num2) => {
  const numCounter = {};
  let numberOfDigitsInNum1 = 0;
  while (num1 % 10 !== 0) {
    const remaining = num1 % 10;
    num1 = parseInt(num1 / 10);
    numCounter[remaining] = (numCounter[remaining] || 0) + 1;
    numberOfDigitsInNum1++;
  }
  let numberOfDigitsInNum2 = 0;
  while (num2 % 10 !== 0) {
    const remaining = num2 % 10;
    num2 = parseInt(num2 / 10);
    if (!numCounter[remaining]) return false;
    numCounter[remaining]--;
    numberOfDigitsInNum2++;
  }
  return numberOfDigitsInNum1 === numberOfDigitsInNum2;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
