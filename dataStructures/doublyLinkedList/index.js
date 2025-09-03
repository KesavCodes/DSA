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
  get(index) {
    if (index < 0 || index > this.length - 1) return null;
    let curr;
    if (index <= (this.length - 1) / 2) {
      let currIndex = 0;
      curr = this.head;
      while (currIndex < index) {
        curr = curr.next;
        currIndex++;
      }
    } else {
      let currIndex = this.length - 1;
      curr = this.tail;
      while (currIndex > index) {
        curr = curr.prev;
        currIndex--;
      }
    }
    return curr;
  }
  set(index, val) {
    if (index === this.length) return !!this.push(val);
    const foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.val = val;
    return true;
  }
  insert(index, val) {
    if (index === 0) return !!this.unshift(val);
    else if (index === this.length) return !!this.push(val);
    const prevNode = this.get(index - 1);
    if (!prevNode) return false;
    const nextNode = prevNode.next;
    const newNode = new Node(val);
    // Changing links between the nodes
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const nodeToBeRemoved = this.get(index);
    if (!nodeToBeRemoved) return undefined;
    const prevNode = nodeToBeRemoved.prev;
    const nextNode = nodeToBeRemoved.next;
    nodeToBeRemoved.prev = null;
    nodeToBeRemoved.next = null;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
    return nodeToBeRemoved;
  }
  traverse() {
    let doublyLinkedListString = "|";
    let curr = this.head;
    while (curr) {
      doublyLinkedListString += `-->${curr.val}`;
      curr = curr.next;
    }
    console.log(doublyLinkedListString);
  }
}

const doublyLinkedList = new DoublyLinkedList()
  .push(5)
  .push(10)
  .push(15)
  .push(20)
  .push(25)
  .push(30);

doublyLinkedList.traverse();

doublyLinkedList.remove(2);

doublyLinkedList.traverse();
