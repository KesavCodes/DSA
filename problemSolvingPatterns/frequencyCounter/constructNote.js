const constructNote = (message, letters) => {
  const charCounter = {};
  for (let char of letters) {
    charCounter[char] = (charCounter[char] ?? 0) + 1;
  }
  for (let char of message) {
    if (!charCounter[char]) return false;
    charCounter[char]--;
  }
  return true;
};

console.log(constructNote("aa", "abc")); // false
console.log(constructNote("abc", "dcba")); // true
console.log(constructNote("aabbcc", "bcabcaddff")); // true
