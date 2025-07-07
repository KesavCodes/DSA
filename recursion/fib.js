const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};
// 1 2 3 4 5 6 7  8  9 10
// 1 1 2 3 5 8 13 21 34 55

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465

//             fib 3
//   fib(2)              fib(1)
// fib(1) fib(0)    fib(0) fib(-1)
