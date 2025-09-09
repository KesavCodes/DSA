// LIFO
const stack = [];

// Stack using Push and Pop - Optimized - TC O(1)

//Add to the last
stack.push(5);
stack.push(10);
stack.push(15);
console.log(stack);
//Remove from the last
stack.pop();
console.log(stack)
stack.pop();
stack.pop();
console.log(stack);

// Stack using Unshift and Shift - Not Optimized - TC O(N)

//Add to the start
stack.unshift(5);
stack.unshift(10);
stack.unshift(15);
console.log(stack)
//Remove from the start
stack.shift();
console.log(stack)
stack.shift();
stack.shift();
console.log(stack);