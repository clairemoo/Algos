function reconstructBst(preOrderTraversalValues) {
	if (!preOrderTraversalValues.length) return null;
	
  let root = new BST(preOrderTraversalValues[0]);
	for (let i = 1; i < preOrderTraversalValues.length; i++) {
		let value = preOrderTraversalValues[i];
		insertValueInBst(value, root);
	}
  return root;
}

function insertValueInBst(value, tree) {
	if (value < tree.value) {
		if (tree.left === null) {
			tree.left = new BST(value);
		} else {
			insertValueInBst(value, tree.left);
		}
	} else {
		if (tree.right === null) {
			tree.right = new BST(value);
		} else {
			insertValueInBst(value, tree.right);
		}
	}
}