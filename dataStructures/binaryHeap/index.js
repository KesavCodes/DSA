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
      const temp = Math.floor((parentIndex - 1) / 2);
      childIndex = parentIndex;
      parentIndex = temp;
    }
    return this;
  }
}

const maxBinaryHeap = new MaxBinaryHeap();

maxBinaryHeap.insert(100).insert(19).insert(36).insert(204).insert(6).insert(120);

console.log(maxBinaryHeap.values)
