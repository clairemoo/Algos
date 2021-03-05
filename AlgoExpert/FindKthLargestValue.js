class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findKthLargestValueInBst(tree, k) {
      let sortedValues = [];
      traverseInOrder(tree, sortedValues);
      return sortedValues[sortedValues.length - k]
  }
  
  function traverseInOrder(tree, array) {
      if (tree === null) return;
      traverseInOrder(tree.left, array);
      array.push(tree.value);
      traverseInOrder(tree.right, array);
  }