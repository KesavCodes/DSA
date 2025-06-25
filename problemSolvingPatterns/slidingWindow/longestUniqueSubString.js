const longestUniqueSubString = (str) => {
  const charSet = new Set();
  let longestUniqueStr = "";
  let strWindow = ""
  for (let i = 0; i < str.length; i++) {
    if (charSet.has(str[i])) {
      while (charSet.has(str[i])) {
        charSet.delete(strWindow[0]);
        strWindow = strWindow.slice(1);
      }
    }
    strWindow += str[i];
    charSet.add(str[i]);
    if(strWindow.length > longestUniqueStr.length) longestUniqueStr = strWindow;
  }
  return longestUniqueStr;
};

console.log(longestUniqueSubString("hellothere")); // lother
console.log(longestUniqueSubString("aaaasbbbbb")); //asb
