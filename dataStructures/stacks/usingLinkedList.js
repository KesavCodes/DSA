class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // Using shift logic as pop in LinkedList take O(n) TC
  pop() {
    if (this.size === 0) return null;
    let firstNode;
    if (this.size === 1) {
      firstNode = this.first;
      this.first = null;
      this.last = null;
    } else {
      firstNode = this.first;
      this.first = firstNode.next;
      firstNode.next = null;
    }
    this.size--;
    return firstNode.val;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }
}

const stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
