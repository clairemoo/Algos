class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function binaryTreeDiameter(tree) {
    return getDiameter(tree).diameter;
  }
  
  function getDiameter(tree) {
      if (tree === null) {
          return new TreeInfo(0, 0);
      }
      
      let leftTreeInfo = getDiameter(tree.left);
      let rightTreeInfo = getDiameter(tree.right);
      
      let longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
      let maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
      let currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
      let currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);
  
      return new TreeInfo(currentDiameter, currentHeight);
  }
  
  class TreeInfo {
      constructor(diameter, height) {
          this.diameter = diameter;
          this.height = height;
      }
  }