function findThreeLargestNumbersFirstSolution(array) {
	let threeLargestNums = [array[0]];
	let i = 1;
	while (i < 3) {
		if (array[i] < threeLargestNums[0]) {
			threeLargestNums.unshift(array[i]);
		} else if (threeLargestNums[1] && array[i] < threeLargestNums[1]) {
			threeLargestNums.splice(1, 0, array[i]);
		} else {
			threeLargestNums.push(array[i]);
		}
		i++;
	}
	
	for (let i = 3; i < array.length; i++) {
		if (array[i] <= threeLargestNums[0]) continue;
		if (array[i] <= threeLargestNums[1]) {
			threeLargestNums[0] = array[i];
		} else if (array[i] <= threeLargestNums[2]) {
			threeLargestNums[0] = threeLargestNums[1];
			threeLargestNums[1] = array[i];
		} else {
			threeLargestNums.push(array[i]);
			threeLargestNums.shift();
		}
	}
	
	return threeLargestNums;
}

function findThreeLargestNumbersWithHelperFunctions(array) {
    const threeLargest = [null, null, null];
      for (const num of array) {
          updateLargest(threeLargest, num);
      }
      return threeLargest;
  }
  
  function updateLargest(array, num) {
      if (array[2] === null || num > array[2]) {
          shiftAndUpdate(array, num, 2);
      } else if (array[1] === null || num > array[1]) {
          shiftAndUpdate(array, num, 1);
      } else if (array[0] === null || num > array[0]) {
          shiftAndUpdate(array, num, 0);
      } 
  }
  
  function shiftAndUpdate(array, num, idx) {
      for (let i = 0; i <= idx; i++) {
          if (i === idx) {
              array[i] = num;
          } else {
              array[i] = array[i + 1];
          }
      }
  }