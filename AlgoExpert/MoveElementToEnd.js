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

function optimizedMoveElementToEnd(array, toMove) {
    let i = 0;
      let j = array.length - 1;
      while (i < j) {
          while (i < j && array[j] === toMove) j--;
          if (array[i] === toMove) swap(i, j, array);
          i++;
      }
      return array;
  }
  
  function swap(i, j, array) {
      let temp = array[j];
      array[j] = array[i];
      array[i] = temp;
  }
  