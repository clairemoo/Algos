class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null;
    }
  }
  
  function findSuccessor(tree, node) {
    let array = [];
      traverseInOrder(tree, array);
      for (let i = 0; i < array.length; i++) {
          if (array[i].value === node.value) {
              let nextNode = i + 1;
              if (nextNode === array.length) return null;
              return array[nextNode]
          }
      }
  }
  
  function traverseInOrder(tree, array) {
      if (tree !== null) {
          traverseInOrder(tree.left, array);
          array.push(tree);
          traverseInOrder(tree.right, array);
      }
  }