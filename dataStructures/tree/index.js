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

  preOrderDfs(node = this.root) {
    if (!node) return [];
    const left = this.preOrderDfs(node.left);
    const right = this.preOrderDfs(node.right);
    return [node.val, ...left, ...right];
  }

  inOrderDfs(node = this.root) {
    if (!node) return [];
    const left = this.inOrderDfs(node.left);
    const right = this.inOrderDfs(node.right);
    return [...left, node.val, ...right];
  }

  postOrderDfs(node = this.root) {
    if (!node) return [];
    const left = this.postOrderDfs(node.left);
    const right = this.postOrderDfs(node.right);
    return [...left, ...right, node.val];
  }

  dfs(type = "inOrder") {
    if (type === "inOrder") return this.inOrderDfs();
    else if (type === "preOrder") return this.preOrderDfs();
    else if (type === "postOrder") return this.postOrderDfs();
    return undefined;
  }

  bfs() {
    if (!this.root) {
      console.log("The Tree is empty");
      return;
    }
    const visited = [];
    const nodeArr = [this.root];
    while (nodeArr.length) {
      const poppedElement = nodeArr.shift();
      visited.push(poppedElement.val);
      if (poppedElement.left) nodeArr.push(poppedElement.left);
      if (poppedElement.right) nodeArr.push(poppedElement.right);
    }
    return visited;
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
  .insertRecursion(5)
  .insertRecursion(15)
  .insertRecursion(1)
  .insertRecursion(8)
  .insertRecursion(12)
  .insertRecursion(18);

console.log(bst.dfs("preOrder"));
console.log(bst.dfs("inOrder"));
console.log(bst.dfs("postOrder"));

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
