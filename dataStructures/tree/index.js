class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertRecursion(val, curr = this.root) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      if (curr.val > val) {
        if (!curr.left) {
          curr.left = newNode;
          return this;
        }
        this.insertRecursion(val, curr.left);
      } else if (curr.val < val) {
        if (!curr.right) {
          curr.right = newNode;
          return this;
        }
        this.insertRecursion(val, curr.right);
      }
    }
    return this;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) this.root = newNode;
    else {
      let currNode = this.root;
      while (true) {
        if (currNode.val === val) break;
        else if (currNode.val > val) {
          if (!currNode.left) {
            currNode.left = newNode;
            break;
          }
          currNode = currNode.left;
        } else {
          if (!currNode.right) {
            currNode.right = newNode;
            break;
          }
          currNode = currNode.right;
        }
      }
    }
    return this;
  }

  findRecursive(val, curr = this.root) {
    if (!curr) return undefined;
    if (curr.val === val) return curr;
    else if (curr.val > val) return this.findRecursive(val, curr.left);
    else return this.findRecursive(val, curr.right);
  }

  find(val) {
    if (!this.root) return undefined;
    let currNode = this.root;
    while (currNode) {
      if (currNode.val === val) return currNode;
      else if (currNode.val > val) currNode = currNode.left;
      else currNode = currNode.right;
    }
    return undefined;
  }

  secondMin(curr) {
    if (!curr || !curr.left) return undefined;
    const min = this.secondMin(curr.left);
    return !min ? curr : min;
  }
  maxNode(curr) {
    if (curr) return undefined;
    if (!curr.right) return curr;
    return this.maxNode(this.right);
  }

  remove(val) {
    if (!this.root) return undefined;
    const foundNode = this.find(val);
    if (!foundNode) return undefined;
    if (foundNode.left && foundNode.right) {
      const secondMin = this.secondMin(foundNode.right);
      foundNode.val = secondMin.left.val;
      secondMin.left = null;
    } else if (foundNode.left || foundNode.right) {
      if (foundNode.left) {
        foundNode.val = foundNode.left.val;
        foundNode.left = null;
      } else {
        foundNode.val = foundNode.right.val;
        foundNode.right = null;
      }
    } else {
      foundNode.val = null;
    }
  }
}

const bst = new BinarySearchTree();
// bst.root = new Node(10);
// bst.root.left = new Node(6);
// bst.root.right = new Node(12);
// bst.root.left.right = new Node(8);

// bst.insert(10).insert(12).insert(6).insert(8).insert(10);

bst
  .insertRecursion(10)
  .insertRecursion(12)
  .insertRecursion(6)
  .insertRecursion(2)
  .insertRecursion(8)
  .insertRecursion(12)
  .insertRecursion(16)
  .insertRecursion(11);

bst.remove(10);

// console.log(bst.find(10));
// console.log(bst.find(9));
// console.log(bst.find(11));
// console.log(bst.find(22));
// console.log(bst.find(12));
// console.log(bst.find(16));

// console.log(bst.findRecursive(10)); // true
// console.log(bst.findRecursive(9)); // false
// console.log(bst.findRecursive(11)); // true
// console.log(bst.findRecursive(22)); // false
// console.log(bst.findRecursive(12)); // true
// console.log(bst.findRecursive(16)); // true
