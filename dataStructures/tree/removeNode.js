class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchPractice {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) this.root = newNode;
    else {
      let curr = this.root;
      while (true) {
        if (val > curr.val) {
          if (curr.right) {
            curr = curr.right;
          } else {
            curr.right = newNode;
            break;
          }
        } else if (val < curr.val) {
          if (curr.left) {
            curr = curr.left;
          } else {
            curr.left = newNode;
            break;
          }
        } else return this;
      }
    }
    return this;
  }
  traverse(curr = this.root) {
    if (!curr) return;
    this.traverse(curr.left);
    console.log(curr.val);
    this.traverse(curr.right);
  }

  find(val, curr = this.root) {
    if (!curr) return undefined;
    else if (curr.val === val) return curr;
    else if (curr.val > val) return this.find(val, curr.left);
    else return this.find(val, curr.right);
  }

  findNodeAndParent(val, curr = this.root, prev = null) {
    if (!curr) return [curr, prev];
    else if (curr.val === val) return [curr, prev];
    else if (curr.val > val)
      return this.findNodeAndParent(val, curr.left, curr);
    else return this.findNodeAndParent(val, curr.right, curr);
  }

  remove(val) {
    if (!this.root) return null;
    let [currNode, parentNode] = this.findNodeAndParent(val);
    if (!currNode) return null;
    const foundNodeCopy = JSON.parse(JSON.stringify(currNode));
    const noOfChild =
      currNode.left && currNode.right
        ? 2
        : currNode.left || currNode.right
        ? 1
        : 0;
    if (noOfChild === 0) {
      // If no child and no parent means only root exists
      if (!parentNode) this.root = null;
      else if (parentNode.left === currNode) parentNode.left = null;
      else parentNode.right = null;
    } else if (noOfChild === 1) {
      // If case of one child and no parents, we can set the child node as root
      const availableNode = currNode.left || currNode.right;
      if (!parentNode) this.root = availableNode;
      else {
        if (parentNode.left === currNode) parentNode.left = availableNode;
        else parentNode.right = availableNode;
      }
    } else {
      let lowestInRight = currNode.right;
      let lowestInRightParent = currNode;
      while (lowestInRight.left) {
        lowestInRightParent = lowestInRight;
        lowestInRight = lowestInRight.left;
      }
      currNode.val = lowestInRight.val;
      if (lowestInRightParent.left === lowestInRight) {
        lowestInRightParent.left = lowestInRight.right;
      } else {
        lowestInRightParent.right = lowestInRight.right;
      }
    }
    return foundNodeCopy;
  }
}

const binarySearchTree = new BinarySearchPractice();
binarySearchTree
  .insert(10)
  .insert(2)
  .insert(7)
  .insert(12)
  .insert(9)
  .insert(0)
  .insert(11);

binarySearchTree.traverse();
// [10, 2 ,7, 12, 9, 0,11]
//       10
//   2        12
//  0  7    11
//      9

// console.log(binarySearchTree.find(3));
// console.log(binarySearchTree.find(2));
// console.log(binarySearchTree.find(4));
// console.log(binarySearchTree.find(7));

console.log(binarySearchTree.remove(10));
binarySearchTree.traverse();
console.log(binarySearchTree.remove(0));
binarySearchTree.traverse();
console.log(binarySearchTree.remove(12));
binarySearchTree.traverse();
console.log(binarySearchTree.remove(11));
console.log(binarySearchTree.remove(2));
console.log(binarySearchTree.remove(2));
console.log(binarySearchTree.remove(9));
console.log(binarySearchTree.remove(7));
console.log(binarySearchTree.remove(2));

binarySearchTree.traverse();
binarySearchTree.insert(1000);
binarySearchTree.insert(1005);
binarySearchTree.traverse();
