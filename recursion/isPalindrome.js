const isPalindrome = (str) => {
  const helper = (p1, p2) => {
    if (p1 > p2) return true;
    if (str[p1] !== str[p2]) return false;
    return helper(++p1, --p2);
  };
  return helper(0, str.length - 1);
};

console.log(isPalindrome('bananab')) // true
console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
