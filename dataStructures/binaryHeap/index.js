class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    let childIndex = this.values.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    while (
      this.values[childIndex] > this.values[parentIndex] &&
      childIndex > 0
    ) {
      [this.values[childIndex], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[childIndex],
      ];
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
    return this;
  }

  extractMax() {
    const extractedElem = this.values[0];
    const currValue = this.values.pop();
    if (this.values.length) {
      let currIndex = 0;
      this.values[0] = currValue;
      while (true) {
        let leftValue =
          this.values[2 * currIndex + 1] || Number.MIN_SAFE_INTEGER;
        let rightValue =
          this.values[2 * currIndex + 2] || Number.MIN_SAFE_INTEGER;
        if (leftValue > currValue || rightValue > currValue) {
          this.values[currIndex] =
            leftValue > rightValue ? leftValue : rightValue;
          currIndex = 2 * currIndex + (leftValue > rightValue ? 1 : 2);
          this.values[currIndex] = currValue;
        } else break;
      }
    }
    return extractedElem;
  }
}

const maxBinaryHeap = new MaxBinaryHeap();

maxBinaryHeap
  .insert(100)
  .insert(19)
  .insert(36)
  .insert(204)
  .insert(6)
  .insert(120);

console.log(maxBinaryHeap.extractMax()); // 204
console.log(maxBinaryHeap.extractMax()); // 120
console.log(maxBinaryHeap.extractMax()); // 100
console.log(maxBinaryHeap.extractMax()); // 39
console.log(maxBinaryHeap.extractMax()); // 19
console.log(maxBinaryHeap.extractMax()); // 6 
console.log(maxBinaryHeap.extractMax()); // undefined

console.log(maxBinaryHeap.values); // []
maxBinaryHeap.insert(50);
maxBinaryHeap.insert(120);
console.log(maxBinaryHeap.values); // [120, 50]
console.log(maxBinaryHeap.extractMax()); // 120
console.log(maxBinaryHeap.values); // [50]
