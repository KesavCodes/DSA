const isSubsequence = (str1, str2) => {
  let p1 = 0;
  let p2 = 0;
  while (p2 < str2.length) {
    if (str1[p1] === str2[p2]) p1++;
    p2++;
  }
  return p1 === str1.length;
};

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
