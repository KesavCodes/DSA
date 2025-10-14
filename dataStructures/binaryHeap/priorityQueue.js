class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  insert(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    let currIdx = this.values.length - 1;
    let parentIdx = Math.floor((currIdx - 1) / 2);
    while (
      this.values[currIdx]?.priority < this.values[parentIdx]?.priority &&
      currIdx > 0
    ) {
      [this.values[currIdx], this.values[parentIdx]] = [
        this.values[parentIdx],
        this.values[currIdx],
      ];
      currIdx = parentIdx;
      parentIdx = Math.floor((currIdx - 1) / 2);
    }
    return this;
  }
  extractMin() {
    const extractedElem = this.values[0];
    let currVal = this.values.pop();
    if (this.values.length) {
      this.values[0] = currVal;
      let currIdx = 0;
      while (true) {
        let leftValue = this.values[2 * currIdx + 1] ?? {
          priority: Number.MAX_SAFE_INTEGER,
        };
        let rightValue = this.values[2 * currIdx + 2] ?? {
          priority: Number.MAX_SAFE_INTEGER,
        };
        if (
          leftValue.priority < currVal.priority ||
          rightValue.priority < currVal.priority
        ) {
          this.values[currIdx] =
            leftValue.priority < rightValue.priority ? leftValue : rightValue;
          currIdx =
            2 * currIdx + (leftValue.priority < rightValue.priority ? 1 : 2);
          this.values[currIdx] = currVal;
        } else break;
      }
    }
    return extractedElem;
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue
  .insert("Go out", 2)
  .insert("brush the teeth", 1)
  .insert("Have food", 3)
  .insert("Dance", 0);

console.log(priorityQueue.values);

console.log(priorityQueue.extractMin());
console.log(priorityQueue.extractMin());
console.log(priorityQueue.extractMin());
console.log(priorityQueue.extractMin());
console.log(priorityQueue.extractMin());

console.log(priorityQueue.values);
