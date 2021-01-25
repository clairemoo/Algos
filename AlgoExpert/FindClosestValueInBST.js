function findClosestValueInBst(tree, target) {
	let closestNum = tree.value;
	while (tree) {
		if (Math.abs(tree.value - target) < Math.abs(closestNum - target)) {
			closestNum = tree.value
		}
		if (target > tree.value) {
			tree = tree.right;
		} else {
			tree = tree.left;
		}
	}
	return closestNum;
}