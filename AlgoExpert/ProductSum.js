function productSum(array, depth = 1) {
	let totalSum = 0;
	
	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] === "number") {
			totalSum += array[i]
		} else {

		totalSum += productSum(array[i], depth + 1)}
	}
	
	return totalSum * depth;
}