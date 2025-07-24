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
  pop() {
    if (this.length === 0) {
      console.log("List is Empty!");
      return null;
    } else if (this.length === 1) {
      const temp = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    } else {
      let list = this.head;
      let pre = null;
      while (list.next) {
        pre = list;
        list = list.next;
      }
      pre.next = null;
      this.tail = pre;
      this.length--;
      return list;
    }
  }
  traverse() {
    let list = this.head;
    while (list) {
      console.log(list.val);
      list = list.next;
    }
  }
}

const sLinkedList = new SinglyLinkedList();

sLinkedList.push("Hi");
sLinkedList.push("There");
sLinkedList.push("How have you been?");

console.log(sLinkedList.length);

sLinkedList.traverse();
console.log(sLinkedList.pop());
console.log(sLinkedList.pop());
console.log(sLinkedList.pop());
console.log(sLinkedList.pop());
console.log(sLinkedList.pop());
console.log(sLinkedList.pop());
console.log(sLinkedList.pop());

// const first = new Node("Hi");
// first.next = new Node("There");
// first.next.next = new Node("How have you been?");
