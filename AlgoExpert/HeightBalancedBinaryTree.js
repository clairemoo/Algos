class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function heightBalancedBinaryTree(tree) {
      let treeInfo = getTreeInfo(tree);
    return treeInfo.isBalanced;
  }
  
  class TreeInfo {
      constructor(height, isBalanced) {
          this.height = height;
          this.isBalanced = isBalanced
      }
  }
  
  function getTreeInfo(tree) {
      if (tree === null) {
          return new TreeInfo(-1, true);
      }
      
      let leftTreeInfo = getTreeInfo(tree.left);
      let rightTreeInfo = getTreeInfo(tree.right);
      
      let isBalanced = 
              leftTreeInfo.isBalanced && 
              rightTreeInfo.isBalanced && 
              Math.abs(leftTreeInfo.height - rightTreeInfo.height) <= 1;
      let greatestHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height)
      
      return new TreeInfo(greatestHeight, isBalanced);
  }