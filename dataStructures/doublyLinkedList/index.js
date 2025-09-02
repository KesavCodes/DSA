class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
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
    const lastItem = this.tail;
    this.tail = lastItem.prev;
    this.tail.next = null;
    lastItem.prev = null;
    this.length--;
    return lastItem;
  }
  shift() {
    if (this.isListEmpty()) return null;
    const handleSingleNode = this.isListHasOnlyOneNode();
    if (handleSingleNode) return handleSingleNode;
    const firstElement = this.head;
    this.head = firstElement.next;
    this.head.prev = null;
    firstElement.next = null;
    this.length--;
    return firstElement;
  }
  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return this;
  }
}

const doublyLinkedList = new DoublyLinkedList().push(5).push(10).unshift(15).push(20);

console.log(doublyLinkedList.shift());
console.log(doublyLinkedList);

console.log(doublyLinkedList.shift());
console.log(doublyLinkedList);
