class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// FIFO
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val){
    const newNode = new Node(val);
    if(this.size===0){
        this.first = newNode;
        this.last = newNode;
    }else{
        this.last.next = newNode;
        this.last = newNode;
    }
    return ++this.size;
  }
  dequeue(){
    if(this.size===0) return null;
    let dequeuedNode;
    if(this.size===1){
        dequeuedNode = this.first;
        this.first = null;
        this.last = null;
    }else{
        dequeuedNode = this.first;
        this.first = this.first.next;
        dequeuedNode.next = null;
    }
    this.size--;
    return dequeuedNode.val;
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
