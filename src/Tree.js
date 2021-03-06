class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  // O(1)
  addChild(value) {
    const newTree = new Tree(value);
    this.children.push(newTree);
    return newTree;
  }
  // O(n)
  contains(value) {
    let result = false;
    function searchValue(tree) {
      if (tree.value === value) result = true;
      if (tree.children !== []) {
        for (const child of tree.children) searchValue(child);
      }
    }
    searchValue(this);
    return result;
  }
  // O(n)
  remove(value) {
    let removedValue;
    function searchValue(tree) {
      let childHasValue = false;
      if (tree.children !== []) {
        for (const child of tree.children) {
          if (child.value === value) {
            childHasValue = true;
            removedValue = child;
          }
          if (childHasValue) {
            tree.children.splice(tree.children.indexOf(removedValue), 1);
          } else {
            for (const child of tree.children) searchValue(child);
          }
        }
      }
    }
    searchValue(this);
    return removedValue;
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

*/
  // O(n)
  traverseDepthFirst(fn) {
    function depthFirst(fn, tree) {
      if (tree.children[0]) depthFirst(fn, tree.children[0]);
      if (tree.children[1]) depthFirst(fn, tree.children[1]);
      fn(tree);
    }
    depthFirst(fn, this);
  }
  // O(n)
  traverseBreadthFirst(fn) {
    fn(this);
    function traverseBreadth(callback, tree) {
      for (const child of tree.children) callback(child);
      for (const child of tree.children) traverseBreadth(callback, child);
    }
    traverseBreadth(fn, this);
  }
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/

module.exports = Tree;
