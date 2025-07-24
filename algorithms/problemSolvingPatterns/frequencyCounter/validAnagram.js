const isValidAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const charCount = {};
  for (const char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of str2) {
    if(!charCount[char]) return false;
    charCount[char]--;
  }
  return true;
};



console.log(isValidAnagram("", ""));   // true
console.log(isValidAnagram("aaz", "zza")); // false
console.log(isValidAnagram("anagram", "nagaram")); // true
console.log(isValidAnagram("rat", "car")); // false
console.log(isValidAnagram("awesome", "awesom"));  // false
console.log(isValidAnagram("qwerty", "tyqerw"));  // true
console.log(isValidAnagram("timetwisttext", "texttwisttime")); // true
