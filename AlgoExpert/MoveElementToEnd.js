function moveElementToEnd(array, toMove) {
	let count = 0;
	let idx = 0;
	
	while (idx < array.length - count) {
		if (array[idx] === toMove) {
			array.splice(idx, 1);
			array.push(toMove);
			count++;
		} else {
		idx++;
		}
	}
	
  return array;
}