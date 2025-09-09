// FIFO
const queue = [];

// queue using Unshift and Pop - TC O(n) as Unshift have to reindex all the element

//Add to the start
queue.unshift(5);
queue.unshift(10);
queue.unshift(15);
console.log(queue);
//Remove from the last
queue.pop();
console.log(queue)
queue.pop();
queue.pop();
console.log(queue);

// queue using Push and Shift - TC O(n) as Shift have to reindex all the element

//Add from the last
queue.push(5);
queue.push(10);
queue.push(15);
console.log(queue)
//Remove from the start
queue.shift();
console.log(queue)
queue.shift();
queue.shift();
console.log(queue);