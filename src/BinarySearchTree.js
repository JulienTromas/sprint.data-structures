class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // O(log n)
  insert(value) {
    let iterator = this;
    let insertedFlag = false;
    while (!insertedFlag) {
      if (iterator.value === value) break;
      if (value > iterator.value) {
        if (iterator.right !== null) iterator = iterator.right;
        else {
          iterator.right = new BinarySearchTree(value);
          insertedFlag = true;
        }
      } else {
        if (iterator.left !== null) iterator = iterator.left;
        else {
          iterator.left = new BinarySearchTree(value);
          insertedFlag = true;
        }
      }
    }
    return this;
  }
  // O(log n)
  contains(value) {
    let iterator = this;
    while (true) {
      if (iterator.value === value) return true;
      if (value > iterator.value) {
        if (iterator.right !== null) iterator = iterator.right;
        else {
          return false;
        }
      } else {
        if (iterator.left !== null) iterator = iterator.left;
        else {
          return false;
        }
      }
    }
  }
  // O(n)
  traverseDepthFirstInOrder(callback) {
    function inOrder(callback, tree) {
      if (tree.left !== null) inOrder(callback, tree.left);
      callback(tree);
      if (tree.right !== null) inOrder(callback, tree.right);
    }
    inOrder(callback, this);
  }

  /*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
  // O(n)
  traverseDepthFirstPreOrder(callback) {
    function inOrder(callback, tree) {
      if (tree.left !== null) inOrder(callback, tree.left);
      if (tree.right !== null) inOrder(callback, tree.right);
      callback(tree);
    }
    inOrder(callback, this);
  }
}

module.exports = { BinarySearchTree };
