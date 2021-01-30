function nodeDepths(root) {
    let totalSums = [0];
      calculateSum(root, 0, totalSums);
      return totalSums[0];
  }
  
  function calculateSum(node, currentDepth, total) {
      if (!node) {
          return
      };
      
      total[0] = total[0] + currentDepth;
      
      if (!node.right && !node.left) {return};
      
      calculateSum(node.left, currentDepth + 1, total);
      calculateSum(node.right, currentDepth + 1, total);
      
  }

// Second Solution

  function nodeDepthsTwo(root) {
	let sumOfDepths = 0;
	let stack = [{node: root, depth: 0}];
	
	while (stack.length) {
		const {node, depth} = stack.pop();
		if (!node) continue;
		sumOfDepths+=depth;
		stack.push({node: node.left, depth: depth + 1});
		stack.push({node: node.right, depth: depth + 1});
	}
	
	return sumOfDepths; 
}  
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }