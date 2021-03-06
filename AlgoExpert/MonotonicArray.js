function isMonotonic(array) {
	if (array.length <= 2) return true;
	let direction = array[1] - array[0];
	for (let i = 2; i < array.length; i++) {
		if (direction === 0) {
			direction = array[i] - array[i - 1];
		} else {
			if (isBreakingDirection(array[i], array[i - 1], direction)) return false;
		}
	}
	return true
}

function isBreakingDirection(current, prev, direction) {
	let currentDirection = current - prev;
	if (direction > 0 && currentDirection < 0) return true;
	if (direction < 0 && currentDirection > 0) return true;
}

function isMonotonicCleaner(array) {
    let nonIncreasing = true;
      let nonDecreasing = true;
      
      for (let i = 1; i < array.length; i++) {
          if (array[i] < array[i - 1]) nonDecreasing = false;
          if (array[i] > array[i - 1]) nonIncreasing = false
      }
      
      return nonIncreasing || nonDecreasing
  }