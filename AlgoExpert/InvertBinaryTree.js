function invertBinaryTree(tree) {
    invertHelper(tree)
      return tree;
  }
  
  function invertHelper(tree) {
      if (tree === null) return;
       let right = tree.right;
      let left = tree.left;
      tree.left = right;
      tree.right = left;
      invertHelper(tree.right);
      invertHelper(tree.left);
  }