// val - piece of data
// next - reference to the next node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  push(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  isListEmpty() {
    if (this.length === 0) {
      console.log("List is Empty!");
      return true;
    }
    return false;
  }

  isListHasOnlyOneNode() {
    if (this.length === 1) {
      const current = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return current;
    }
    return null;
  }

  pop() {
    if (this.isListEmpty()) return null;
    const handleSingleNode = this.isListHasOnlyOneNode();
    if (handleSingleNode) return handleSingleNode;
    let current = this.head;
    let pre = null;
    while (current.next) {
      pre = current;
      current = current.next;
    }
    pre.next = null;
    this.tail = pre;
    this.length--;
    return current;
  }

  unshift(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.isListEmpty()) return null;
    const handleSingleNode = this.isListHasOnlyOneNode();
    if (handleSingleNode) return handleSingleNode;
    const current = this.head;
    this.head = this.head.next;
    current.next = null;
    this.length--;
    return current;
  }

  get(index) {
    if (index >= this.length || index < 0) {
      console.log(
        `Invalid Index. Total list length is ${
          this.length
        } and valid index is between 0 and ${this.length - 1}`
      );
      return null;
    }
    let currentIndex = 0;
    let current = this.head;
    while (currentIndex < index) {
      current = current.next;
      currentIndex++;
    }
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) foundNode.val = val;
    return foundNode;
  }

  insert(index, val) {
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const prevNode = this.get(index - 1);
    if (prevNode) {
      const temp = prevNode.next;
      const newNode = new Node(val);
      newNode.next = temp;
      prevNode.next = newNode;
      this.length++;
      return true;
    }
    return false;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

const sLinkedList = new SinglyLinkedList();

sLinkedList.push("Hi");
sLinkedList.push("There");
sLinkedList.push("How have you been?");
// sLinkedList.traverse();

console.log(sLinkedList.get(0), "--get index 0");
console.log(sLinkedList.get(2), "--get index 2");
console.log(sLinkedList.get(3), "--get index 3");

sLinkedList.insert(1, "Hello from one");

// sLinkedList.set(2, 'I am good');
// sLinkedList.set(0, 'Hello');
// sLinkedList.set(3, 'Test');

console.log(sLinkedList.get(3), "--get index 3");
// console.log(sLinkedList.get(2), "--get index 2");

// console.log(sLinkedList.pop());
// console.log(sLinkedList.pop());
// console.log(sLinkedList.pop());
// console.log(sLinkedList.pop());

// sLinkedList.unshift("I am back");
// sLinkedList.unshift("Back Again");
// sLinkedList.unshift("So Back");
// sLinkedList.traverse();

// console.log(sLinkedList.shift());
// console.log(sLinkedList.shift());
// console.log(sLinkedList.shift());
// console.log(sLinkedList.shift());

sLinkedList.traverse();

// const first = new Node("Hi");
// first.next = new Node("There");
// first.next.next = new Node("How have you been?");
