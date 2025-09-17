class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value, curr = this.root) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      if (curr.value > value) {
        if (!curr.left) {
          curr.left = newNode;
          return this;
        }
        this.insert(value, curr.left);
      } else if (curr.value < value) {
        if (!curr.right) {
          curr.right = newNode;
          return this;
        }
        this.insert(value, curr.right);
      }
    }
    return this;
  }

  findRecursive(value, curr = this.root) {
    if (!curr) return undefined;
    if (curr.value === value) return curr;
    else if (curr.value > value) return this.findRecursive(value, curr.left);
    else return this.findRecursive(value, curr.right);
  }

  minRecursive(curr = this.root) {
    if (!curr || !curr.left) return curr;
    return this.minRecursive(curr.left);
  }
  //   maxNode(curr) {
  //     if (curr) return undefined;
  //     if (!curr.right) return curr;
  //     return this.maxNode(this.right);
  //   }

  findParentRecursive(value, curr = this.root) {
    if (!curr || this.root.value === value) return null;
    if (
      (curr.left && curr.left.value === value) ||
      (curr.right && curr.right.value === value)
    )
      return curr;
    const left = this.findParentRecursive(value, curr.left);
    const right = this.findParentRecursive(value, curr.right);
    return left || right;
  }

  remove(value) {
    const foundNode = this.findRecursive(value);
    const parentNode = this.findParentRecursive(value);

    if (foundNode.left && foundNode.right) {
      const minNode = this.minRecursive(foundNode.right);
      const minNodeParent = this.findParentRecursive(minNode.value);
      if (foundNode !== minNodeParent) {
        foundNode.value = minNode.value;
        minNodeParent.left = minNode.right;
      } else {
        foundNode.value = minNode.value;
        foundNode.right = minNode.right;
      }
    } else if (foundNode.left || foundNode.right) {
      if (!parentNode) return null;
      if (parentNode.left && parentNode.left.value === value)
        parentNode.left = foundNode.left || foundNode.right;
      else parentNode.right = foundNode.left || foundNode.right;
    } else {
      if (!parentNode) return null;
      if (parentNode.left && parentNode.left.value === value)
        parentNode.left = null;
      else parentNode.right = null;
    }
    return foundNode;
  }
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);
binarySearchTree.remove(50);
binarySearchTree.root.right.value; // 20
binarySearchTree.root.right.right; // null
console.log('End of first')
debugger;
binarySearchTree.remove(5);
binarySearchTree.root.left.left.value; // 1
binarySearchTree.root.left.left.right; // null

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);

binarySearchTree.remove(1);
binarySearchTree.root.left.left.value; // 5
binarySearchTree.root.left.left.left; // null
binarySearchTree.root.left.left.right; // null

binarySearchTree.remove(20);
binarySearchTree.root.right.value; // 50
binarySearchTree.root.right.right; // null
binarySearchTree.root.right.left; // null

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50)
  .insert(60)
  .insert(30)
  .insert(25)
  .insert(23)
  .insert(24)
  .insert(70);

binarySearchTree.remove(10);
binarySearchTree.root.left.value; // 12
binarySearchTree.root.left.left.value; // 1
binarySearchTree.root.left.left.right.value; // 5

binarySearchTree.remove(50);
binarySearchTree.root.right.value; // 20
binarySearchTree.root.right.right.value; // 60
binarySearchTree.root.right.right.left.value; // 30

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(22)
  .insert(49)
  .insert(85)
  .insert(66)
  .insert(95)
  .insert(90)
  .insert(100)
  .insert(88)
  .insert(93)
  .insert(89);

binarySearchTree.remove(85);
binarySearchTree.root.right.right.value; // 88
binarySearchTree.root.right.right.right.left.left.value; // 89
