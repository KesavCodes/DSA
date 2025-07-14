const findSubString = (str1, str2) => {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    let isMatch = true;
    for (let j = 0; j < str2.length; j++) {
      if (str1[i + j] !== str2[j]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) count++;
  }
  return count;
};

console.log(findSubString("helloel", "l"));
